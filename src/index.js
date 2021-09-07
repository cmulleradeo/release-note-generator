import Counter from './Counter'

const NB_COUNTER = 5

const main = () => {
    const counters = []
    for (let index = 0; index < NB_COUNTER; index++) {
        counters.push(new Counter());
    }

    counters[2].increment()
    counters[3].increment()
    counters[3].increment()
    counters[3].increment()

    for (let index = 0; index < counters.length; index++) {
        console.log(`Counter ${i + 1} has a value of ${counters[i].get()}`)
    }
}

main()
// BREAK