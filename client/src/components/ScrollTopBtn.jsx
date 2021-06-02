import { useState } from 'react';

function ScrollTopBtn() {
  const [scrollBtnVis, setScrollBtnVis] = useState("none")

  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      setScrollBtnVis("25px")
    } else {
      setScrollBtnVis("-100px")
    }
  })

  return (
    <button 
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }}
      style={{right: scrollBtnVis}}
      className="scrollTopBtn"
    >
      ᐱ
    </button>
  )
}
export default ScrollTopBtn;
