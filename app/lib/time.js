

export default function Time() {

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

return (`${hours}:${minutes}:${seconds}`)

}