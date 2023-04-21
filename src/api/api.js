export async function fetchData() {
    const response = await fetch('https://majazocom.github.io/Data/candies.json');
    const data = await response.json();
    return data;
}
