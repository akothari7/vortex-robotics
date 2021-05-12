//Import routes
import { auth as AuthRoutes } from "./routes/Auth";
import { teamMember as TeamMemberRoutes } from "./routes/TeamMember";
import { isAdmin } from "./middlewares/isAdmin";
import express, { Request, Response, NextFunction } from "express";
import cookieSession from "cookie-session";
import cors from "cors";
import dotenv from "dotenv";
import consola, { Consola } from "consola";

//API class
export class API {
  public app: express.Application;
  public logger: Consola = consola;
  public PORT: number = 4000;

  public constructor() {
    this.app = express();

    this.setConfig();
    this.setRequestLogger();
    this.setRoutes();
  }

  public start() {
    this.setConfig();
    this.setRequestLogger();
    this.setRoutes();
    dotenv.config();

    this.app.listen(this.PORT, () => {
      this.logger.success(`Vortex Robotics API started on port ${this.PORT}`);
    });
  }

  //Configuration (middlewares)
  private setConfig() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(
      cookieSession({
        secret: process.env.COOKIE_SECRET,
        keys: ["key1", "key2"],
      })
    );
  }

  //Set up request logger
  private setRequestLogger() {
    this.app.use(async (req: Request, res: Response, next: NextFunction) => {
      console.log(`[${req.method} - ${req.path}]`);

      next();
    });
  }

  //Define routes
  private setRoutes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({ success: true, message: "Vortex Robotics API version 1" });
    });

    this.app.get("/admin", isAdmin, (req, res) => {
      res.redirect("http://localhost:3000/admin");
    });

    this.app.use("/api", AuthRoutes, TeamMemberRoutes);
  }
}
