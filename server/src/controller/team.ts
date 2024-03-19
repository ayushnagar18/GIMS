import { Request, Response } from "express";
import client from "../db/postgres";
import { file } from "../utils";
const fs = require("fs");

declare module "express-serve-static-core" {
  export interface Request {
    files: file[];
  }
}

export async function addmember(req: Request, res: Response) {
  const {
    name,
    role,
    serialno,
    industryexperience,
    researchexperience,
    designskills,
    projectmanagement,
    creativity,
    programmingskills,
    industryknowledge,
    manufacturing,
    selfmotivation,
    stamina,
    reflex,
    intelligence,
    healingfactor,
    sarcasm,
    speed,
    email,
    linkedin,
    number,
  }: any = req.body;
  const imgpath = "./public/images";
  const imgfile = req.files[0];
  const herofile = req.files[1];
  const imgfiletype = imgfile.mimetype?.split("/")[1];
  const heroimgfiletype = herofile.mimetype?.split("/")[1];
  let imgname = "";
  await name.split(" ").map((nam : any) =>{
    imgname += nam
  })
  const imgloc = `${imgname + "." + imgfiletype}`;
  const heroimgloc = `${imgname + "hero." + heroimgfiletype}`;
  await fs.rename(
    `${imgpath}/${imgfile.filename}`,
    `${imgpath}/${imgname + "." + imgfiletype}`,
    () => {}
  );
  await fs.rename(
    `${imgpath}/${herofile.filename}`,
    `${imgpath}/${imgname + "hero." + heroimgfiletype}`,
    () => {}
  );

  try {
    await client.query(
      "INSERT INTO Team(name,serialno,role,image,heroimg,industryexperience,researchexperience,designskills,projectmanagement,creativity,programmingskills,industryknowledge,manufacturing,selfmotivation,stamina,reflex,intelligence,healingfactor,sarcasm,speed,email,linkedin,number) VALUES ($1 ,$2 , $3 , $4 , $5 , $6 , $7 , $8 , $9 , $10 ,$11 ,$12 , $13 , $14 , $15,$16 , $17 , $18 , $19,$20,$21,$22 ,$23);",
      [
        name,
        serialno,
        role,
        imgloc,
        heroimgloc,
        industryexperience,
        researchexperience,
        designskills,
        projectmanagement,
        creativity,
        programmingskills,
        industryknowledge,
        manufacturing,
        selfmotivation,
        stamina,
        reflex,
        intelligence,
        healingfactor,
        sarcasm,
        speed,
        email,
        linkedin,
        number,
      ]
    );
  } catch (err) {
    return res.json({ message: err.message }).end();
  }
  return res.status(200).json({ message: "Team Member added" });
}
export async function updatemember(req: Request, res: Response) {
  const {
    id,
    name,
    role,
    serialno,
    industryexperience,
    researchexperience,
    designskills,
    projectmanagement,
    creativity,
    programmingskills,
    industryknowledge,
    manufacturing,
    selfmotivation,
    stamina,
    reflex,
    intelligence,
    healingfactor,
    sarcasm,
    speed,
    email,
    linkedin,
    number,
  }: any = req.body;
  try {
    await client.query(
      "UPDATE Team SET name = $1,serialno = $2,role=$3,industryexperience = $4,researchexperience = $5,designskills = $6,projectmanagement = $7,creativity = $8,programmingskills = $9,industryknowledge = $10,manufacturing = $11,selfmotivation = $12,stamina = $13,reflex = $14,intelligence = $15,healingfactor = $16,sarcasm = $17,speed = $18,email = $19,linkedin = $20,number = $21 WHERE id = $22;",
      [
        name,
        serialno,
        role,
        industryexperience,
        researchexperience,
        designskills,
        projectmanagement,
        creativity,
        programmingskills,
        industryknowledge,
        manufacturing,
        selfmotivation,
        stamina,
        reflex,
        intelligence,
        healingfactor,
        sarcasm,
        speed,
        email,
        linkedin,
        number,
        id,
      ]
    );
  } catch (err) {
    return res.json({ message: err.message }).end();
  }
  return res.status(200).json({ message: "Team Member Updated" });
}
export async function getMember(req: Request, res: Response) {
  const { id } = req.params;
  const team = await client.query("SELECT * FROM Team WHERE id = $1", [id]);

  return res.status(200).json(team.rows[0]);
}
export async function getMemberByEmail(req: Request, res: Response) {
  const email = req.params.email;
  const team = await client.query("SELECT * FROM Team WHERE email = $1", [email]);

  return res.status(200).json(team.rows[0]);
}

export async function getMembers(_: Request, res: Response) {
  const team = await client.query("SELECT * FROM Team ORDER BY serialno ASC;");

  return res.status(200).json(team.rows);
}

export async function deleteMember(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await client.query("DELETE FROM Team WHERE id = $1;", [id]);
  } catch (err) {
    return res.json({ message: err.message }).end();
  }

  return res.status(200).json({ message: "Team Member Deleted" });
}
