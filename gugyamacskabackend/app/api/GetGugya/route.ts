import { NextResponse } from "next/server";

export async function GET() {
let dogs = ["Trex", "Pteranodon", "Velociraptor", "Triceratops"];
let randomDoge = Math.floor(Math.random() * dogs.length);
  return NextResponse.json({ animal: dogs[randomDoge] });
}
