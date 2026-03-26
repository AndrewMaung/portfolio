export function downloadCV() {
  fetch('/cv/Ah_Maung_Oo_CV.pdf')
    .then((res) => {
      if (!res.ok) throw new Error('CV not found')
      return res.blob()
    })
    .then((blob) => {
      const url = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }))
      const a = document.createElement('a')
      a.href = url
      a.download = 'Ah_Maung_Oo_CV.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    })
    .catch(() => alert('CV not available yet. Please check back soon!'))
}