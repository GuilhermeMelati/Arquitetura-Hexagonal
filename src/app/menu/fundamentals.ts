import Terminal from '@/app/utils/terminal'
import polimorfism from '@/app/fundamentals/polimorfism'

export default async function fundamentals() {
  Terminal.title('Fundamentos')

  const [index] = await Terminal.menu(['1 - Polimorfismo', 'Voltar'])

  switch (index) {
    case 0:
      await polimorfism()
      break
    case 1:
      return
  }

  await fundamentals()
}
