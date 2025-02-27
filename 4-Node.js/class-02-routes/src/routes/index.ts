import { Router } from "express";

export const router = Router();

router.get("/", (_request, response) => {
    response.json({ name: "Server" });
  });

router.get("/users", (_req, res) => {
  res.json([
    { name: "Ash", age: 10},
    { name: "Mestre Kame", age: 300},
    { name: "Alucard", age: 500}
  ])
})
//routes params
router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  console.log(id);
  

  const users = [
    { id: 1, name: "Ash", age: 10},
    { id: 2, name: "Mestre Kame", age: 300},
    { id: 3, name: "Alucard", age: 500}
  ];

  res.json(users[Number(id) - 1] || {});
})

// query params
router.get("/user", (req, res) => {
  const { id, name } = req.query;
  res.json({id, name});
});

// body params

router.post("/user", (req, res) => {
  const { id, name } = req.body;
  res.json({id, name});
});
