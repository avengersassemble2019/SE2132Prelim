let input = document.getElementById('emailContent') as HTMLInputElement

class Singleton {
    private static instance: Singleton = input

    private constructor(emailAddress: string) {
        alert(`${emailAddress} has sent you an email!`)
    }

    public static getInstance() : Singleton {
        if (!Singleton.instance) {
            Singleton.instance = input
        }
        return Singleton.instance
    }
}


input?.addEventListener("click", function() {
    let result = Singleton.getInstance()
    return result
})