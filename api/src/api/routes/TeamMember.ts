import { isAdmin } from "../middlewares/isAdmin";
import { Router } from "express";
import { PrismaClient } from "@prisma/client";

export const teamMember = Router();
const prisma = new PrismaClient();

teamMember.post("/team-member/create", isAdmin, async (req, res) => {
  const { firstName, lastName, role, about } = req.body;

  if (!firstName || !lastName || !role || !about) {
    return res.json({ success: false, error: "Missing fields on request" });
  }

  const result = await prisma.teamMember.findUnique({
    where: {
      firstName: firstName,
    },
  });

  if (result) {
    return res.json({ success: false, error: "Member already exists" });
  }

  await prisma.teamMember.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      role: role,
      about: about,
    },
  });

  res.json({ success: true });
});

teamMember.delete("/team-member/delete", isAdmin, async (req, res) => {
  const id = parseInt(req.params.id);
  // /team-member/delete/:id

  await prisma.teamMember.delete({
    where: {
      id: id,
    },
  });
});
