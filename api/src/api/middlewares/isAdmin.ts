import { Request, Response, NextFunction } from "express";

//middleware to check if the user is an admin
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session!.githubID == 68178572) {
    next();
  } else {
    res.redirect("/");
  }
};
