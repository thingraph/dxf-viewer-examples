
import { ExamplesFileUrl } from '@/Consts'
import { Example } from '@/Defines'

export const fetchExamples = async () => {
  return new Promise<Example[]>((resolve) => {
    console.log(process.env.BASE_URL);
    fetch(`${process.env.BASE_URL}${ExamplesFileUrl}`).then(response => response.json()).then(data => {
      resolve(data)
    })
  })
};
