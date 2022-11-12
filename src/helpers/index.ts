export const posted = (created: string) => {
  const createdAt = new Date(created)
  const nowDate = new Date();
  const first = createdAt.getTime()
  const second = nowDate.getTime()
  return Math.round((second - first) / 86400000);
}

export const getPages = (activePage: number, n: number) => {
  if(n <= 7) {
    const arr: number[] = []
    for(let i = 1; i <= n; i++) {
      arr.push(i)
    }
    return arr
  }
  if(activePage <= 4) return [1,2,3,4,5,'...',n] 
  if(activePage >= n-3) return [1,'...',n-4, n-3, n-2, n-1, n] 
  return [1, '...', activePage-1, activePage, activePage+1, '...', n]
}