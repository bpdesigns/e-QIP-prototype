import CreditValidator, { CreditItemValidator } from './credit'

describe('credit component validation', function () {
  it('validate reason', () => {
    const tests = [
      {
        state: {
          Explanation: {
            value: ''
          }
        },
        expected: false
      },
      {
        state: {
          Explanation: {
            value: 'Completely forgot'
          }
        },
        expected: true
      }
    ]

    tests.forEach(test => {
      expect(new CreditItemValidator(test.state, null).validExplanation()).toBe(test.expected)
    })
  })

  it('validate name', () => {
    const tests = [
      {
        state: {
          Name: {
            value: ''
          }
        },
        expected: false
      },
      {
        state: {
          Name: {
            value: 'The name'
          }
        },
        expected: true
      }
    ]

    tests.forEach(test => {
      expect(new CreditItemValidator(test.state, null).validName()).toBe(test.expected)
    })
  })

  it('validate telephone', () => {
    const tests = [
      {
        state: {
          Telephone: {}
        },
        expected: false
      },
      {
        state: {
          Telephone: {
            noNumber: '',
            number: '7031112222',
            numberType: 'Home',
            timeOfDay: 'Both',
            extension: ''
          }
        },
        expected: true
      }
    ]

    tests.forEach(test => {
      expect(new CreditItemValidator(test.state, null).validTelephone()).toBe(test.expected)
    })
  })

  it('validate address', () => {
    const tests = [
      {
        state: {
          Address: {}
        },
        expected: false
      },
      {
        state: {
          Address: {
            addressType: 'United States',
            address: '1234 Some Rd',
            city: 'Arlington',
            state: 'Virginia',
            zipcode: '22202'
          }
        },
        expected: true
      }
    ]

    tests.forEach(test => {
      expect(new CreditItemValidator(test.state, null).validAddress()).toBe(test.expected)
    })
  })

  it('validate description', () => {
    const tests = [
      {
        state: {
          Description: {
            value: ''
          }
        },
        expected: false
      },
      {
        state: {
          Description: {
            value: 'The description'
          }
        },
        expected: true
      }
    ]

    tests.forEach(test => {
      expect(new CreditItemValidator(test.state, null).validDescription()).toBe(test.expected)
    })
  })

  it('validate branch', () => {
    const tests = [
      {
        state: {
          HasCreditCounseling: ''
        },
        expected: false
      },
      {
        state: {
          HasCreditCounseling: 'Unicorn'
        },
        expected: false
      },
      {
        state: {
          HasCreditCounseling: 'No'
        },
        expected: true
      },
      {
        state: {
          HasCreditCounseling: 'Yes'
        },
        expected: true
      }
    ]

    tests.forEach(test => {
      expect(new CreditValidator(test.state, null).validHasCreditCounseling()).toBe(test.expected)
    })
  })

  it('validate items', () => {
    const tests = [
      {
        state: {
          HasCreditCounseling: 'No',
          List: []
        },
        expected: true
      },
      {
        state: {
          HasCreditCounseling: 'Yes',
          List: []
        },
        expected: false
      },
      {
        state: {
          HasCreditCounseling: 'Yes',
          List: [{}]
        },
        expected: false
      },
      {
        state: {
          HasCreditCounseling: 'Yes',
          List: [
            {
              Explanation: {
                value: 'Completely forgot'
              },
              Name: {
                value: 'The name'
              },
              Telephone: {
                noNumber: '',
                number: '7031112222',
                numberType: 'Home',
                timeOfDay: 'Both',
                extension: ''
              },
              Address: {
                addressType: 'United States',
                address: '1234 Some Rd',
                city: 'Arlington',
                state: 'Virginia',
                zipcode: '22202'
              },
              Description: {
                value: 'The description'
              }
            }
          ]
        },
        expected: true
      }
    ]

    tests.forEach(test => {
      expect(new CreditValidator(test.state, null).isValid()).toBe(test.expected)
    })
  })
})