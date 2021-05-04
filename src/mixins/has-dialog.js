const hasDialog = {
  methods: {
    toggleRootOverflowHidden(shouldHide) {
      const style = shouldHide ? 'hidden' : ''
      this.$nextTick(() => {
        document.documentElement.style.overflow = style
        document.body.style.overflow = style
      })
    },
  },
}

export default hasDialog
