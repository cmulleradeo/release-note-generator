import Counter from './Counter'

const main = () => {
    const counters = []
    for (let index = 0; index < 5; index++) {
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
