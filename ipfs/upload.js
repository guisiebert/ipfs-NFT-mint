import { createHelia } from 'helia'
import { json } from '@helia/json'

async function run() {
    const helia = await createHelia()
    const j = json(helia)
    
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "Drum Time NFT",
            attributes: [
            {
                "trait_type": "Funk",
                "value": "10" 
            },
            {
                "trait_type": "Pop",
                "value": "100"
            },
            {
                "trait_type": "Rock n'Roll ",
                "value": "1000"
            }
            ],
            image: "https://ipfs.io/ipfs/QmTAxyzNwZ2Gop3QTQPekFXQGVbzq4R4H5Me8KjzMmqxqn",
            description: "A beautiful logo with a lot of rock n roll!"
        })
    };


    const result = await j.add(metadata);
    console.log(result);

    process.exit(0);
}

run();

// CID: CID(bagaaieraftqnriiy6pjqn6lkfxz4u4nq6oyw6pyxkuleldb7k3syg2d36nra)