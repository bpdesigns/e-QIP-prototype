import React from 'react'
import { i18n } from '../../../../config'
import { Accordion, ValidationElement, Branch, Show } from '../../../Form'
import Order from '../Order'
import { CompetenceValidator } from '../../../../validators'

export default class Competence extends ValidationElement {
  constructor (props) {
    super(props)

    this.state = {
      IsIncompetent: props.IsIncompetent,
      List: props.List,
      errorCodes: []
    }

    this.update = this.update.bind(this)
    this.updateIsIncompentent = this.updateIsIncompentent.bind(this)
    this.updateList = this.updateList.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  update (field, values) {
    this.setState({[field]: values}, () => {
      if (this.props.onUpdate) {
        this.props.onUpdate({
          IsIncompetent: this.state.IsIncompetent,
          List: this.state.List
        })
      }
    })
  }

  updateList (values) {
    this.update('List', values)
  }

  updateIsIncompentent (values) {
    this.update('IsIncompetent', values)
  }

  isValid () {
    return new CompetenceValidator(this.state).isValid()
  }

  handleValidation (event, status, error) {
    if (!event) {
      return
    }

    let codes = super.mergeError(this.state.errorCodes, super.flattenObject(error))
    let complexStatus = null
    if (codes.length > 0) {
      complexStatus = false
    } else if (this.isValid()) {
      complexStatus = true
    }

    this.setState({error: complexStatus === false, valid: complexStatus === true, errorCodes: codes}, () => {
      const errorObject = { [this.props.name]: codes }
      const statusObject = { [this.props.name]: { status: complexStatus } }
      super.handleValidation(event, statusObject, errorObject)
    })
  }

  summary (item, index) {
    const o = (item || {}).Competence || {}
    const occurred = (o.Occurred || {}).date ? `${o.Occurred.month}/${o.Occurred.year}` : ''
    const courtName = (o.CourtName || {}).value ? `${o.CourtName.value} ${occurred}` : i18n.t('psychological.competence.collection.summaryCourtName')
    const type = i18n.t('psychological.competence.collection.itemType')

    return (
      <span>
        <span className="index">{type}</span>
        <span className="info"><strong>{courtName}</strong></span>
      </span>
    )
  }

  render () {
    return (
      <div className="competence">
        <h2>{i18n.t('psychological.heading.competence')}</h2>
        <Branch name="is_incompetent"
          value={this.state.IsIncompetent}
          help="psychological.competence.help.incompetent"
          onValidate={this.handleValidation}
          onUpdate={this.updateIsIncompentent}>
        </Branch>

        <Show when={this.state.IsIncompetent === 'Yes'}>
          <Accordion minimum="1"
            items={this.state.List}
            onUpdate={this.updateList}
            summary={this.summary}
            onValidate={this.handleValidation}
            description={i18n.t('psychological.competence.collection.description')}
            appendTitle={i18n.t('psychological.competence.collection.appendTitle')}
            appendMessage={i18n.m('psychological.competence.collection.appendMessage')}
            appendLabel={i18n.t('psychological.competence.collection.appendLabel')}>
            <Order name="Competence" prefix="competence" bind={true} />
          </Accordion>
        </Show>
      </div>
    )
  }
}

Competence.defaultProps = {
  List: []
}
