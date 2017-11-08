/** @author Tomasz Surowiec <xeloxpl@windowslive.com> */
interface Fei {
  Alpha: number
  Delta: number
}
interface Math {
  Phi: number
  Fei: Fei
  Z: number
  G: number
  Lamb: number
  K: number
  fact: any
  rand: any
}
(() => {
  Math.Phi = (1 + Math.sqrt(5)) / 2
  Math.Fei = {
    Alpha: 2.5029,
    Delta: 4.6692
  }
  Math.Z = 1.2020569
  Math.G = 0.57721
  Math.Lamb = 1.30357
  Math.K = 2.6854520010
  Math.fact = (n) => {
    if (n === 0) return 1
    else return n * factorial(n - 1)
  }
  Math.rand = (max:number, min:number = 0,floor:boolean = true) => floor ? Math.floor(Math.random() * (max - min) + min) : Math.random() * (max - min)
})()