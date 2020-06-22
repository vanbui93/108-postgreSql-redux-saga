const styles = (theme) => ({
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 10,
    height: '100%',
    position: 'relative',
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.color.deFaultTextColor,
  },
  menuLinkActive: {
   "&>div": {
      backgroundColor: '#4287f5',
      color: '#ffffff',
      "&:hover": {
        backgroundColor: '#6e98dc',
      }
    },
  }
});
export default styles;