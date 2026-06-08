import html2canvas from 'html2canvas'

export async function downloadImage(element: HTMLElement, filename: string) {
  await document.fonts?.ready

  const canvas = await html2canvas(element, {
    backgroundColor: '#f7f3eb',
    // 공유 카드는 이미 1080px 정사각형이므로 1배율로 저장하고, 작은 요소만 선명도를 위해 2배율을 사용합니다.
    scale: element.offsetWidth >= 1080 ? 1 : 2,
    logging: false,
    useCORS: false,
  })

  const link = document.createElement('a')
  link.download = filename.endsWith('.png') ? filename : `${filename}.png`
  link.href = canvas.toDataURL('image/png')
  document.body.appendChild(link)
  link.click()
  link.remove()
}
