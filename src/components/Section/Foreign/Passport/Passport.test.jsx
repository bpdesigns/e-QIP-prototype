import React from 'react'
import { mount } from 'enzyme'
import Passport from './Passport'

describe('The passport component', () => {
  it('no error on empty', () => {
    const expected = {
      name: 'passport'
    }
    const component = mount(<Passport name={expected.name} />)
    expect(component.find('input[name="has_passport"]').length).toEqual(2)
    expect(component.find('.first input').length).toEqual(0)
    expect(component.find('.number input').length).toEqual(0)
    expect(component.find('.month input').length).toEqual(0)
    expect(component.find('.usa-input-error-label').length).toEqual(0)
  })

  it('display passport field if "Yes" is selected', () => {
    const expected = {
      name: 'passport',
      HasPassport: 'Yes'
    }
    const component = mount(<Passport {...expected} />)
    expect(component.find('input[name="has_passport"]').length).toEqual(2)
    expect(component.find('.number input').length).toEqual(1)
    expect(component.find('.month input').length).toEqual(2)
    expect(component.find('.usa-input-error-label').length).toEqual(0)
  })

  it('display no passport information if "No" is selected', () => {
    const expected = {
      name: 'passport',
      HasPassport: 'No'
    }
    const component = mount(<Passport name={expected.name} HasPassport="No" />)
    expect(component.find('input[name="has_passport"]').length).toEqual(2)
    expect(component.find('.first input').length).toEqual(0)
    expect(component.find('.number input').length).toEqual(0)
    expect(component.find('.month input').length).toEqual(0)
    expect(component.find('.usa-input-error-label').length).toEqual(0)
  })

  it('displays suggested names if found', () => {
    let first = ''
    const expected = {
      name: 'passport',
      HasPassport: 'Yes',
      onUpdate: (values) => {
        first = values.Name.first
      },
      suggestedNames: [
        {
          first: 'john',
          last: 'smith'
        },
        {
          first: 'jonathan',
          last: 'smith'
        }
      ]
    }
    const component = mount(<Passport {...expected} />)
    expect(component.find('.modal').length).toEqual(1)
    component.find('.suggestion .action button').first().simulate('click')
    expect(first).toEqual(expected.suggestedNames[0].first)
  })

  it('loads data and adds comment', () => {
    const data = {
      Card: 'Book',
      Comments: 'Comment',
      Issued: {
        day: '1',
        estimated: false,
        month: '1',
        name: 'issued',
        year: '2003'
      },
      Expiration: {
        day: '1',
        estimated: false,
        month: '1',
        name: 'expiration',
        year: '2004'
      },
      HasPassport: 'Yes',
      Name: {
        first: 'John',
        last: 'Doe',
        middle: 'S',
        name: 'name',
        suffix: 'Jr'
      },
      Number: {
        name: 'number',
        value: 'C1234567'
      }
    }
    const component = mount(<Passport {...data} name={'passport'} />)
    expect(component.find('.usa-input-error-label').length).toEqual(0)
    component.find('.branch .yes input').simulate('change')
    component.find('.name .first input').simulate('change')
    component.find('.passport-book input').simulate('change')
    component.find('.passport-number input').simulate('change')
    component.find('.passport-issued .day input').simulate('change')
    component.find('.passport-expiration .day input').simulate('change')
    component.find({type: 'radio', name: 'passport-card', value: 'Card'}).simulate('change')
  })

  it('can render with regular expression for passport card', () => {
    const props = {
      HasPassport: 'Yes',
      Card: 'Card',
      reCard: 'test'
    }
    const component = mount(<Passport {...props} />)
    expect(component.find('.number').length).toBe(1)
    expect(component.find('[pattern="test"]').length).toBe(1)
  })
})
