export const sortingASD = (a, b) => {
        if ( a.state.toLowerCase() < b.state.toLowerCase() ){
          return -1;
        }
        if ( a.state.toLowerCase() > b.state.toLowerCase() ){
          return 1;
        }
        return 0;
}