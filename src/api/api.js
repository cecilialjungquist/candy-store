export async function fetchData() {
    const response = await fetch('https://majazocom.github.io/Data/candies.json');
    const data = await response.json();
    return data;
}

// import { fetchData } from '../api/api.js';

// export const loadData = () => async (dispatch) => {
//   const data = await fetchData();
//   dispatch({ type: 'LOAD_DATA', payload: data });
// }