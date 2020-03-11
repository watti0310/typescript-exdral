interface masterCharacter{
  code: string,
  name: string,
  termSettings: character[],
}
interface character{
  code: string,
  termName: string,
  description: string,
  visual: charaVisual,
  personality: personality,
  skills: skill[],
}
interface charaVisual{
  height: number,
  weight: number,
}
interface personality{
  habitEndWord: string
}
interface skill{
  code: string,
  name: string,
  description: string,
}