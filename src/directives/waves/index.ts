import './waves.css'

const context = '@@wavesContext'

function handleClick(el: Node, binding: { value: any }) {
  function handle(e: any) {
    const customOpts = Object.assign({}, binding.value)
    const opts = Object.assign(
      {
        ele: el, // 波纹作用元素
        type: 'hit', // hit 点击位置扩散 center中心点扩展
        color: 'rgba(0, 0, 0, 0.15)' // 波纹颜色
      },
      customOpts
    )
    const target = opts.ele
    if (target) {
      target.style.position = 'relative'
      target.style.overflow = 'hidden'
      const rect = target.getBoundingClientRect()
      let ripple = target.querySelector('.waves-ripple')
      if (!ripple) {
        ripple = document.createElement('span')
        ripple.className = 'waves-ripple'
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
        target.appendChild(ripple)
      } else {
        ripple.className = 'waves-ripple'
      }
      switch (opts.type) {
        case 'center':
          ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px'
          ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px'
          break
        default:
          ripple.style.top =
            (e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop ||
              document.body.scrollTop) + 'px'
          ripple.style.left =
            (e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft ||
              document.body.scrollLeft) + 'px'
      }
      ripple.style.backgroundColor = opts.color
      ripple.className = 'waves-ripple z-active'
      return false
    }
  }

  if (!(el as any)[context]) {
    ;(el as any)[context] = {
      removeHandle: handle
    }
  } else {
    ;(el as any)[context].removeHandle = handle
  }

  return handle
}

export default {
  mounted(el: Node, binding: { value: any }) {
    el.addEventListener('click', handleClick(el, binding), false)
  },
  updated(el: Node, binding: { value: any }) {
    el.removeEventListener('click', (el as any)[context].removeHandle, false)
    el.addEventListener('click', handleClick(el, binding), false)
  },
  unmounted(el: {
    [x: string]: any
    removeEventListener: (arg0: string, arg1: any, arg2: boolean) => void
  }) {
    el.removeEventListener('click', el[context].removeHandle, false)
    el[context] = null
    delete el[context]
  }
}
