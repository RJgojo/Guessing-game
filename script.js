'use strict'
class UserAccount {
  userPoint = 0
  keepGoing = ''
  constructor(name, accountNumber) {
    this.name = name
    this.accountNumber = accountNumber
  }
  enterAccNum() {
    const num = Number(prompt('what is your account number'))
    if (num === this.accountNumber) {
      this.playGame()
    }
  }
  guessNumber() {
    return new Promise((resolve, reject) => {
      let randNum = Math.trunc(Math.random() * 6) + 1
      console.log(randNum)
      let answer = Number(prompt('Guess a number between 1-6'))
      if (answer === randNum) {
        resolve()
        console.log('you win')
        this.userPoint += 2
      } else {
        this.userPoint += randNum - answer === 1 ? 1 : 0
        console.log(
          `Wrong!!, the answer was ${randNum}. You have ${this.userPoint} points`
        )
        this.cont()
        if (this.keepGoing === 'yes') {
          this.playGame()
        } else reject('bye')
      }
    })
  }
  cont() {
    this.keepGoing = prompt('would u like to continue')
  }

  async playGame() {
    const firstAttempt = await this.guessNumber()
    //   console.log(firstAttempt)
    console.log(`you have ${this.userPoint} points`)
    this.cont()
    if (this.keepGoing) {
      this.keepGoing === 'yes' ? this.playGame() : console.log('Bye')
    }
  }
}

const raph = new UserAccount('raph', 8788)
raph.enterAccNum()
