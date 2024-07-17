import Terminal from '@/app/utils/terminal'

export default async function polimorfism() {
  Terminal.title('Polimorfismo')
  const carModel = Terminal.selection('Escolha um modelo de carro:', [
    'Fusca',
    'Gol',
    'Civic',
    'Corolla'
  ])
  while (true) {
    Terminal.clear()
    const confirmation = await Terminal.confirmation(
      'Deseja ver um exemplo de polimorfismo?'
    )
    if (!confirmation) return
  }
}
