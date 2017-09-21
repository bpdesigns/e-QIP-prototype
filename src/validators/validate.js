import * as logic from '.'

export const validate = (payload) => {
  if (payload && payload.type) {
    return validators[payload.type](payload.props)
  }
  return false
}

const validators = {
  'benefit': (data) => {
    return false
  },
  'branch': (data) => {
    return logic.validBranch(data)
  },
  'checkbox': (data) => {
    return logic.validGenericTextfield(data)
  },
  'checkboxgroup': (data) => {
    return false
  },
  'clearancelevel': (data) => {
    return false
  },
  'collection': (data) => {
    return false
  },
  'contacts': (data) => {
    return false
  },
  'coowners': (data) => {
    return false
  },
  'country': (data) => {
    return false
  },
  'datecontrol': (data) => {
    return new logic.DateControlValidator(data)
  },
  'daterange': (data) => {
    return new logic.DateRangeValidator(data)
  },
  'email': (data) => {
    return logic.validGenericTextfield(data)
  },
  'employmentactivity': (data) => {
    return false
  },
  'foreignborndocument': (data) => {
    return new logic.ForeignBornDocumentValidator(data)
  },
  'height': (data) => {
    return false
  },
  'location': (data) => {
    return new logic.LocationValidator(data).isValid()
  },
  'name': (data) => {
    return new logic.NameValidator(data).isValid()
  },
  'notapplicable': (data) => {
    return false
  },
  'number': (data) => {
    return false
  },
  'physicaladdress': (data) => {
    return false
  },
  'radio': (data) => {
    return logic.validGenericTextfield(data)
  },
  'reasonleft': (data) => {
    return false
  },
  'reference': (data) => {
    return new logic.Reference(data).isValid()
  },
  'sentence': (data) => {
    return new logic.SentenceValidator(data).isValid()
  },
  'ssn': (data) => {
    return logic.validSSN(data)
  },
  'supervisor': (data) => {
    return false
  },
  'telephone': (data) => {
    return logic.validPhoneNumber(data)
  },
  'text': (data) => {
    return logic.validGenericTextfield(data)
  },
  'textarea': (data) => {
    return logic.validGenericTextfield(data)
  },
  'identification.name': (data) => {
    return new logic.NameValidator(data).isValid()
  },
  'identification.contacts': (data) => {
    return new logic.ContactInformationValidator(data).isValid()
  },
  'identification.othernames': (data) => {
    return new logic.OtherNamesValidator(data).isValid()
  },
  'identification.birthdate': (data) => {
    return new logic.DateControlValidator(data).isValid()
  },
  'identification.birthplace': (data) => {
    return new logic.BirthPlaceValidator(data).isValid()
  },
  'identification.ssn': (data) => {
    return logic.validSSN(data) && data.verified
  },
  'identification.physical': (data) => {
    return new logic.PhysicalValidator(data).isValid()
  },
  'financial.bankruptcy': (data) => {
    return new logic.BankruptcyValidator(data).isValid()
  },
  'financial.gambling': (data) => {
    return new logic.GamblingValidator(data).isValid()
  },
  'financial.taxes': (data) => {
    return new logic.TaxesValidator(data).isValid()
  },
  'financial.card': (data) => {
    return new logic.CardAbuseValidator(data).isValid()
  },
  'financial.credit': (data) => {
    return new logic.CreditValidator(data).isValid()
  },
  'financial.delinquent': (data) => {
    return new logic.DelinquentValidator(data).isValid()
  },
  'financial.nonpayment': (data) => {
    return new logic.NonpaymentValidator(data).isValid()
  },
  'history.education': (data) => {
    return new logic.EducationValidator(data).isValid()
  },
  'history.employment': (data) => {
    return data.List.every(x => {
      return data.ListBranch === 'No' && new logic.EmploymentValidator(x.Item).isValid()
    })
  },
  'history.federal': (data) => {
    return new logic.FederalServiceValidator(data).isValid()
  },
  'history.residence': (data) => {
    return data.List.every(x => {
      return new logic.ResidenceValidator(x.Item, null).isValid()
    })
  },
  'relationships.cohabitants': (data) => {
    return new logic.CohabitantsValidator(data).isValid()
  },
  'relationships.marital': (data) => {
    return new logic.MaritalValidator(data).isValid()
  },
  'relationships.people': (data) => {
    return new logic.PeopleValidator(data).isValid()
  },
  'relationships.relatives': (data) => {
    return new logic.RelativesValidator(data).isValid()
  },
  'citizenship.multiple': (data) => {
    return new logic.CitizenshipMultipleValidator(data).isValid()
  },
  'citizenship.passports': (data) => {
    return new logic.CitizenshipPassportsValidator(data).isValid()
  },
  'citizenship.status': (data) => {
    return new logic.CitizenshipValidator(data).isValid()
  },
  'military.selective': (data) => {
    return new logic.SelectiveServiceValidator(data).isValid()
  },
  'military.history': (data) => {
    return new logic.MilitaryHistoryValidator(data).isValid()
  },
  'military.disciplinary': (data) => {
    return new logic.MilitaryDisciplinaryValidator(data).isValid()
  },
  'military.foreign': (data) => {
    return new logic.MilitaryForeignValidator(data).isValid()
  },
  'foreign.passport': (data) => {
    return new logic.PassportValidator(data).isValid()
  },
  'foreign.contacts': (data) => {
    return new logic.ForeignContactsValidator(data).isValid()
  },
  'foreign.travel': (data) => {
    return new logic.ForeignTravelValidator(data).isValid()
  },
  'foreign.activities.benefits': (data) => {
    return new logic.ForeignBenefitActivityValidator(data).isValid()
  },
  'foreign.activities.direct': (data) => {
    return new logic.ForeignDirectActivityValidator(data).isValid()
  },
  'foreign.activities.indirect': (data) => {
    return new logic.ForeignIndirectActivityValidator(data).isValid()
  },
  'foreign.activities.realestate': (data) => {
    return new logic.ForeignRealEstateActivityValidator(data).isValid()
  },
  'foreign.activities.support': (data) => {
    return new logic.ForeignActivitiesSupportValidator(data).isValid()
  },
  'foreign.business.advice': (data) => {
    return new logic.ForeignBusinessAdviceValidator(data).isValid()
  },
  'foreign.business.conferences': (data) => {
    return new logic.ForeignBusinessConferencesValidator(data).isValid()
  },
  'foreign.business.contact': (data) => {
    return new logic.ForeignBusinessContactValidator(data).isValid()
  },
  'foreign.business.employment': (data) => {
    return new logic.ForeignBusinessEmploymentValidator(data).isValid()
  },
  'foreign.business.family': (data) => {
    return new logic.ForeignBusinessFamilyValidator(data).isValid()
  },
  'foreign.business.political': (data) => {
    return new logic.ForeignBusinessPoliticalValidator(data).isValid()
  },
  'foreign.business.sponsorship': (data) => {
    return new logic.ForeignBusinessSponsorshipValidator(data).isValid()
  },
  'foreign.business.ventures': (data) => {
    return new logic.ForeignBusinessVenturesValidator(data).isValid()
  },
  'foreign.business.voting': (data) => {
    return new logic.ForeignBusinessVotingValidator(data).isValid()
  },
  'substance.alcohol.additional': (data) => {
    return new logic.AlcoholReceivedCounselingsValidator(data).isValid()
  },
  'substance.alcohol.negative': (data) => {
    return new logic.AlcoholNegativeImpactsValidator(data).isValid()
  },
  'substance.alcohol.ordered': (data) => {
    return new logic.AlcoholOrderedCounselingsValidator(data).isValid()
  },
  'substance.alcohol.voluntary': (data) => {
    return new logic.AlcoholVoluntaryCounselingsValidator(data).isValid()
  },
  'substance.drug.clearance': (data) => {
    return new logic.DrugClearanceUsesValidator(data).isValid()
  },
  'substance.drug.misuse': (data) => {
    return new logic.DrugPrescriptionUsesValidator(data).isValid()
  },
  'substance.drug.ordered': (data) => {
    return new logic.DrugOrderedTreatmentsValidator(data).isValid()
  },
  'substance.drug.publicsafety': (data) => {
    return new logic.DrugPublicSafetyUsesValidator(data).isValid()
  },
  'substance.drug.purchase': (data) => {
    return new logic.DrugInvolvementsValidator(data).isValid()
  },
  'substance.drug.usage': (data) => {
    return new logic.DrugUsesValidator(data).isValid()
  },
  'substance.drug.voluntary': (data) => {
    return new logic.DrugVoluntaryTreatmentsValidator(data).isValid()
  },
  'legal.associations.activities-to-overthrow': (data) => {
    return new logic.LegalAssociationsActivitiesValidator(data).isValid()
  },
  'legal.associations.advocating': (data) => {
    return new logic.LegalAssociationsAdvocatingValidator(data).isValid()
  },
  'legal.associations.engaged-in-terrorism': (data) => {
    return new logic.LegalAssociationsEngagedValidator(data).isValid()
  },
  'legal.associations.membership-overthrow': (data) => {
    return new logic.LegalAssociationsOverthrowValidator(data).isValid()
  },
  'legal.associations.membership-violence-or-force': (data) => {
    return new logic.LegalAssociationsViolenceValidator(data).isValid()
  },
  'legal.associations.terrorism-association': (data) => {
    return new logic.LegalAssociationsTerrorismValidator(data).isValid()
  },
  'legal.associations.terrorist-organization': (data) => {
    return new logic.LegalAssociationsTerroristValidator(data).isValid()
  },
  'legal.court': (data) => {
    return new logic.LegalNonCriminalCourtActionsValidator(data).isValid()
  },
  'legal.investigations.debarred': (data) => {
    return new logic.LegalInvestigationsDebarredValidator(data).isValid()
  },
  'legal.investigations.history': (data) => {
    return new logic.LegalInvestigationsHistoryValidator(data).isValid()
  },
  'legal.investigations.revoked': (data) => {
    return new logic.LegalInvestigationsRevokedValidator(data).isValid()
  },
  'legal.police.additionaloffenses': (data) => {
    return new logic.PoliceOtherOffensesValidator(data).isValid()
  },
  'legal.police.domesticviolence': (data) => {
    return new logic.DomesticViolenceValidator(data).isValid()
  },
  'legal.police.offenses': (data) => {
    return new logic.PoliceOffensesValidator(data).isValid()
  },
  'legal.technology.manipulating': (data) => {
    return new logic.LegalTechnologyManipulatingValidator(data).isValid()
  },
  'legal.technology.unauthorized': (data) => {
    return new logic.LegalTechnologyUnauthorizedValidator(data).isValid()
  },
  'legal.technology.unlawful': (data) => {
    return new logic.LegalTechnologyUnlawfulValidator(data).isValid()
  },
  'psychological.competence': (data) => {
    return new logic.CompetenceValidator(data).isValid()
  },
  'psychological.consultations': (data) => {
    return new logic.ConsultationValidator(data).isValid()
  },
  'psychological.diagnoses': (data) => {
    return new logic.DiagnosesValidator(data).isValid()
  },
  'psychological.existing': (data) => {
    return new logic.ExistingConditionsValidator(data).isValid()
  },
  'psychological.hospitalizations': (data) => {
    return new logic.HospitalizationsValidator(data).isValid()
  },
  'psychological.treatment': (data) => {
    return false
  }
}

// Walk through the validation tree of a piece of information.
// This is useful when all values within a particular chunk of
// data does not contain validations based on branching.
export const walkValidationTree = (data) => {
  // No data, no love.
  if (!data) {
    return false
  }

  // If the data matches the signature of a payload we know
  // how to proceed with normal validation logic.
  if (data.type && data.props) {
    return validators(data)
  }

  // The data may be an object with named properties
  // potentially containing payload. We want to "mine"
  // for these and extract their results.
  for (const property in data) {
    // When the property is not specific to this instance
    // skip it and go to the next.
    if (!data.hasOwnProperty(property)) {
      continue
    }

    const result = walkValidationTree(data[property])
    if (!result) {
      return false
    }
  }

  return true
}
