import React from 'react'
import { i18n } from '../../../../../config'
import { Address, ValidationElement, Currency, Field, Text, DateControl, Textarea, NotApplicable, Checkbox, CheckboxGroup } from '../../../../Form'
import CoOwners from '../CoOwners'

export default class RealEstateInterest extends ValidationElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateInterestTypes = this.updateInterestTypes.bind(this)
    this.updateRealEstateType = this.updateRealEstateType.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updateAcquired = this.updateAcquired.bind(this)
    this.updateHowAcquired = this.updateHowAcquired.bind(this)
    this.updateCost = this.updateCost.bind(this)
    this.updateCostEstimated = this.updateCostEstimated.bind(this)
    this.updateSold = this.updateSold.bind(this)
    this.updateSoldNotApplicable = this.updateSoldNotApplicable.bind(this)
    this.updateCoOwners = this.updateCoOwners.bind(this)
  }

  update (field, values) {
    if (this.props.onUpdate) {
      this.props.onUpdate({
        InterestTypes: this.props.InterestTypes,
        RealEstateType: this.props.RealEstateType,
        Address: this.props.Address,
        Acquired: this.props.Acquired,
        HowAcquired: this.props.HowAcquired,
        Cost: this.props.Cost,
        CostEstimated: this.props.CostEstimated,
        Sold: this.props.Sold,
        SoldNotApplicable: this.props.SoldNotApplicable,
        CoOwners: this.props.CoOwners,
        [field]: values
      })
    }
  }

  updateInterestTypes (event) {
    let interestType = event.target.value
    let selected = [...(this.props.InterestTypes || [])]
    if (selected.includes(interestType)) {
      selected.splice(selected.indexOf(interestType), 1)
    } else {
      selected.push(interestType)
    }

    this.update('InterestTypes', selected)
  }

  updateRealEstateType (values) {
    this.update('RealEstateType', values)
  }

  updateAddress (values) {
    this.update('Address', values)
  }

  updateAcquired (values) {
    this.update('Acquired', values)
  }

  updateHowAcquired (values) {
    this.update('HowAcquired', values)
  }

  updateCost (values) {
    this.update('Cost', values)
  }

  updateCostEstimated (cb) {
    this.update('CostEstimated', cb.checked)
  }

  updateSold (values) {
    this.update('Sold', values)
  }

  updateSoldNotApplicable (values) {
    this.update('SoldNotApplicable', values)
  }

  updateCoOwners (values) {
    this.update('CoOwners', values)
  }

  render () {
    const prefix = this.props.prefix
    return (
      <div className="interest">
        <Field title={i18n.t('foreign.activities.realestate.interest.heading.interestTypes')}
          help={'foreign.activities.realestate.interest.help.interestTypes'}
          adjustFor="p">
          {i18n.m('foreign.activities.realestate.interest.para.checkAll')}

          <CheckboxGroup className="interest-types option-list"
            selectedValues={this.props.InterestTypes}>
            <Checkbox name="interest-type"
              label={i18n.m('foreign.activities.realestate.interest.label.interestTypes.yourself')}
              value="Yourself"
              className="yourself"
              onValidate={this.props.onValidate}
              onChange={this.updateInterestTypes}
            />
            <Checkbox name="interest-type"
              label={i18n.m('foreign.activities.realestate.interest.label.interestTypes.spouse')}
              value="Spouse"
              className="spouse"
              onValidate={this.props.onValidate}
              onChange={this.updateInterestTypes}
            />
            <Checkbox name="interest-type"
              label={i18n.m('foreign.activities.realestate.interest.label.interestTypes.cohabitant')}
              value="Cohabitant"
              className="cohabitant"
              onValidate={this.props.onValidate}
              onChange={this.updateInterestTypes}
            />
            <Checkbox name="interest-type"
              label={i18n.m('foreign.activities.realestate.interest.label.interestTypes.dependentChildren')}
              value="DependentChildren"
              className="dependent-children"
              onValidate={this.props.onValidate}
              onChange={this.updateInterestTypes}
            />
          </CheckboxGroup>
        </Field>

        <Field title={i18n.t('foreign.activities.realestate.interest.heading.realEstateType')}
          help={'foreign.activities.realestate.interest.help.realEstateType'}
          shrink={true}>
          <Text name="RealEstateType"
            className="realestate-type"
            {...this.props.RealEstateType}
            onUpdate={this.updateRealEstateType}
            onValidate={this.props.onValidate}
          />
        </Field>

        <Field title={i18n.t('foreign.activities.realestate.interest.heading.address')}
               adjustFor="address">
          <Address name="Address"
            label={i18n.t('foreign.activities.realestate.interest.label.address')}
            {...this.props.Address}
            onUpdate={this.updateAddress}
            onValidate={this.props.onValidate}
          />
        </Field>

        <Field title={i18n.t('foreign.activities.realestate.interest.heading.acquired')}
          help={'foreign.activities.realestate.interest.help.acquired'}
          adjustFor="labels">
          <DateControl name="Acquired"
            className="acquired"
            {...this.props.Acquired}
            label={i18n.t('foreign.activities.realestate.interest.label.acquired')}
            hideDay={true}
            onUpdate={this.updateAcquired}
            onValidate={this.props.onValidate}
          />
        </Field>

        <Field title={i18n.t('foreign.activities.realestate.interest.heading.howAcquired')}
               help={'foreign.activities.realestate.interest.help.howAcquired'}
               adjustFor="p">
          <p>{i18n.t('foreign.activities.realestate.interest.para.howAcquired')}</p>
          <Textarea name="HowAcquired"
            className="how-acquired"
            {...this.props.HowAcquired}
            onUpdate={this.updateHowAcquired}
            onValidate={this.props.onValidate}
          />
        </Field>

        <Field title={i18n.t('foreign.activities.realestate.interest.heading.sold')}
          help={'foreign.activities.realestate.interest.help.sold'}
          adjustFor="labels">
          <NotApplicable name="SoldNotApplicable"
            {...this.props.SoldNotApplicable}
            label={i18n.t('foreign.activities.realestate.interest.label.soldNotApplicable')}
            or={i18n.t('foreign.activities.realestate.interest.label.or')}
            onUpdate={this.updateSoldNotApplicable}>
            <DateControl name="Sold"
              className="sold"
              {...this.props.Sold}
              label={i18n.t('foreign.activities.realestate.interest.label.sold')}
              hideDay={true}
              onUpdate={this.updateSold}
              onValidate={this.props.onValidate}
            />
          </NotApplicable>
        </Field>

        <Field title={i18n.t('foreign.activities.realestate.interest.heading.cost')}
          help={'foreign.activities.realestate.interest.help.cost'}>
          <Currency name="Cost"
            className="cost"
            {...this.props.Cost}
            min="0"
            onUpdate={this.updateCost}
            onValidate={this.props.onValidate}
          />
          <div className="flags">
            <Checkbox name="CostEstimated"
              label={i18n.t('foreign.activities.realestate.interest.label.costEstimated')}
              toggle="false"
              checked={this.props.CostEstimated}
              onUpdate={this.updateCostEstimated}
            />
          </div>
        </Field>

        <CoOwners prefix={prefix}
          {...this.props.CoOwners}
          onUpdate={this.updateCoOwners}
          onValidate={this.props.onValidate}
        />

      </div>
    )
  }
}

RealEstateInterest.defaultProps = {
  prefix: 'activities.realestate.interest'
}
