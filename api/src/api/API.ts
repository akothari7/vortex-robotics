//Import routes
import { auth as AuthRoutes } from "./routes/Auth";
import express, { Request, Response, NextFunction } from "express";
import cookieSession from "cookie-session";
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

    this.app.listen(this.PORT, () => {
      this.logger.success(`Vortex Robotics API started on port ${this.PORT}`);
    });
  }

  //Configuration (middlewares)
  private setConfig() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      cookieSession({
        secret: process.env.COOKIE_SECRET,
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

    this.app.get("/admin", (req, res) => {
      if (req.session!.githubID == 68178572) {
        res.send("Hello Admin <pre>" + JSON.stringify(req.session, null, 2));
      } else {
        res.redirect("/");
      }
    });
    this.app.use("/api", AuthRoutes);
  }
}
