// sync content tabs
// https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/#linked-tabs=
const tabSync = () => {
    const tabs = document.querySelectorAll(".tabbed-set > input")
    for (const tab of tabs) {
        tab.addEventListener("click", () => {
            const current = document.querySelector(`label[for=${tab.id}]`)
            const pos = current.getBoundingClientRect().top
            const labelContent = current.innerHTML
            const labels = document.querySelectorAll('.tabbed-set > label, .tabbed-alternate > .tabbed-labels > label')

            for (const label of labels) {
                if (label.innerHTML === labelContent) {
                    document.querySelector(`input[id=${label.getAttribute('for')}]`).checked = true
                    label.parentElement.style.setProperty('--md-indicator-x', `${current.offsetLeft}px`)
                    label.parentElement.style.setProperty('--md-indicator-width', `${current.offsetWidth}px`)
                }
            }

            // Preserve scroll position
            const delta = (current.getBoundingClientRect().top) - pos
            window.scrollBy(0, delta)
        })
    }
}

tabSync();
