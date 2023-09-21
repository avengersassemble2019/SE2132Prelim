class Singleton {
    static instance: Singleton

    private constructor(emailAddress: string) {
        console.log(`${emailAddress}`)
    }

    public static getInstance() : Singleton {
        if (!Singleton.instance) {
            Singleton.instance =  new Singleton('sample')
        }
        return Singleton.instance
    }


}


