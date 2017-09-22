package form

import (
	"github.com/18F/e-QIP-prototype/api/model"
)

// transform provides a library of possible transformations to
// be made on a JSON structure converting it in to an Entity
// interface.
var transform = map[string]func() model.Entity{
	"benefit":                                         func() model.Entity { return &Benefit{} },
	"branch":                                          func() model.Entity { return &Branch{} },
	"checkbox":                                        func() model.Entity { return &Checkbox{} },
	"checkboxgroup":                                   func() model.Entity { return &CheckboxGroup{} },
	"clearancelevel":                                  func() model.Entity { return &ClearanceLevel{} },
	"collection":                                      func() model.Entity { return &Collection{} },
	"contacts":                                        func() model.Entity { return &Contacts{} },
	"coowners":                                        func() model.Entity { return &CoOwners{} },
	"country":                                         func() model.Entity { return &Country{} },
	"datecontrol":                                     func() model.Entity { return &DateControl{} },
	"daterange":                                       func() model.Entity { return &DateRange{} },
	"email":                                           func() model.Entity { return &Email{} },
	"employmentactivity":                              func() model.Entity { return &EmploymentActivity{} },
	"foreignborndocument":                             func() model.Entity { return &ForeignBornDocument{} },
	"height":                                          func() model.Entity { return &Height{} },
	"location":                                        func() model.Entity { return &Location{} },
	"name":                                            func() model.Entity { return &Name{} },
	"notapplicable":                                   func() model.Entity { return &NotApplicable{} },
	"number":                                          func() model.Entity { return &Number{} },
	"physicaladdress":                                 func() model.Entity { return &PhysicalAddress{} },
	"radio":                                           func() model.Entity { return &Radio{} },
	"reasonleft":                                      func() model.Entity { return &ReasonLeft{} },
	"reference":                                       func() model.Entity { return &Reference{} },
	"sentence":                                        func() model.Entity { return &Sentence{} },
	"ssn":                                             func() model.Entity { return &SSN{} },
	"supervisor":                                      func() model.Entity { return &Supervisor{} },
	"telephone":                                       func() model.Entity { return &Telephone{} },
	"text":                                            func() model.Entity { return &Text{} },
	"textarea":                                        func() model.Entity { return &Textarea{} },
	"identification.name":                             func() model.Entity { return &IdentificationName{} },
	"identification.contacts":                         func() model.Entity { return &IdentificationContacts{} },
	"identification.othernames":                       func() model.Entity { return &IdentificationOtherNames{} },
	"identification.birthdate":                        func() model.Entity { return &IdentificationBirthDate{} },
	"identification.birthplace":                       func() model.Entity { return &IdentificationBirthPlace{} },
	"identification.ssn":                              func() model.Entity { return &IdentificationSSN{} },
	"identification.physical":                         func() model.Entity { return &IdentificationPhysical{} },
	"financial.bankruptcy":                            func() model.Entity { return &FinancialBankruptcy{} },
	"financial.gambling":                              func() model.Entity { return &FinancialGambling{} },
	"financial.taxes":                                 func() model.Entity { return &FinancialTaxes{} },
	"financial.card":                                  func() model.Entity { return &FinancialCard{} },
	"financial.credit":                                func() model.Entity { return &FinancialCredit{} },
	"financial.delinquent":                            func() model.Entity { return &FinancialDelinquent{} },
	"financial.nonpayment":                            func() model.Entity { return &FinancialNonpayment{} },
	"history.residence":                               func() model.Entity { return &HistoryResidence{} },
	"history.employment":                              func() model.Entity { return &HistoryEmployment{} },
	"history.education":                               func() model.Entity { return &HistoryEducation{} },
	"history.federal":                                 func() model.Entity { return &HistoryFederal{} },
	"relationships.status.marital":                    func() model.Entity { return &RelationshipsMarital{} },
	"relationships.status.cohabitant":                 func() model.Entity { return &RelationshipsCohabitants{} },
	"relationships.people":                            func() model.Entity { return &RelationshipsPeople{} },
	"relationships.relatives":                         func() model.Entity { return &RelationshipsRelatives{} },
	"citizenship.status":                              func() model.Entity { return &CitizenshipStatus{} },
	"citizenship.multiple":                            func() model.Entity { return &CitizenshipMultiple{} },
	"citizenship.passports":                           func() model.Entity { return &CitizenshipPassports{} },
	"military.selective":                              func() model.Entity { return &MilitarySelective{} },
	"military.history":                                func() model.Entity { return &MilitaryHistory{} },
	"military.disciplinary":                           func() model.Entity { return &MilitaryDisciplinary{} },
	"military.foreign":                                func() model.Entity { return &MilitaryForeign{} },
	"foreign.passport":                                func() model.Entity { return &ForeignPassport{} },
	"foreign.contacts":                                func() model.Entity { return &ForeignContacts{} },
	"foreign.travel":                                  func() model.Entity { return &ForeignTravel{} },
	"foreign.activities.benefits":                     func() model.Entity { return &ForeignActivitiesBenefits{} },
	"foreign.activities.direct":                       func() model.Entity { return &ForeignActivitiesDirect{} },
	"foreign.activities.indirect":                     func() model.Entity { return &ForeignActivitiesIndirect{} },
	"foreign.activities.realestate":                   func() model.Entity { return &ForeignActivitiesRealEstate{} },
	"foreign.activities.support":                      func() model.Entity { return &ForeignActivitiesSupport{} },
	"foreign.business.advice":                         func() model.Entity { return &ForeignBusinessAdvice{} },
	"foreign.business.conferences":                    func() model.Entity { return &ForeignBusinessConferences{} },
	"foreign.business.contact":                        func() model.Entity { return &ForeignBusinessContact{} },
	"foreign.business.employment":                     func() model.Entity { return &ForeignBusinessEmployment{} },
	"foreign.business.family":                         func() model.Entity { return &ForeignBusinessFamily{} },
	"foreign.business.political":                      func() model.Entity { return &ForeignBusinessPolitical{} },
	"foreign.business.sponsorship":                    func() model.Entity { return &ForeignBusinessSponsorship{} },
	"foreign.business.ventures":                       func() model.Entity { return &ForeignBusinessVentures{} },
	"foreign.business.voting":                         func() model.Entity { return &ForeignBusinessVoting{} },
	"substance.drug.clearance":                        func() model.Entity { return &SubstanceDrugClearance{} },
	"substance.drug.misuse":                           func() model.Entity { return &SubstanceDrugMisuse{} },
	"substance.drug.ordered":                          func() model.Entity { return &SubstanceDrugOrdered{} },
	"substance.drug.publicsafety":                     func() model.Entity { return &SubstanceDrugPublicSafety{} },
	"substance.drug.purchase":                         func() model.Entity { return &SubstanceDrugPurchase{} },
	"substance.drug.usage":                            func() model.Entity { return &SubstanceDrugUsage{} },
	"substance.drug.voluntary":                        func() model.Entity { return &SubstanceDrugVoluntary{} },
	"substance.alcohol.negative":                      func() model.Entity { return &SubstanceAlcoholNegative{} },
	"substance.alcohol.ordered":                       func() model.Entity { return &SubstanceAlcoholOrdered{} },
	"substance.alcohol.voluntary":                     func() model.Entity { return &SubstanceAlcoholVoluntary{} },
	"substance.alcohol.additional":                    func() model.Entity { return &SubstanceAlcoholAdditional{} },
	"legal.associations.activities-to-overthrow":      func() model.Entity { return &LegalAssociationsActivitiesToOverthrow{} },
	"legal.associations.advocating":                   func() model.Entity { return &LegalAssociationsAdvocating{} },
	"legal.associations.engaged-in-terrorism":         func() model.Entity { return &LegalAssociationsEngagedInTerrorism{} },
	"legal.associations.membership-overthrow":         func() model.Entity { return &LegalAssociationsMembershipOverthrow{} },
	"legal.associations.membership-violence-or-force": func() model.Entity { return &LegalAssociationsMembershipViolence{} },
	"legal.associations.terrorism-association":        func() model.Entity { return &LegalAssociationsTerrorismAssociation{} },
	"legal.associations.terrorist-organization":       func() model.Entity { return &LegalAssociationsTerroristOrganization{} },
	"legal.court":                                     func() model.Entity { return &LegalCourt{} },
	"legal.investigations.debarred":                   func() model.Entity { return &LegalInvestigationsDebarred{} },
	"legal.investigations.history":                    func() model.Entity { return &LegalInvestigationsHistory{} },
	"legal.investigations.revoked":                    func() model.Entity { return &LegalInvestigationsRevoked{} },
	"legal.police.additionaloffenses":                 func() model.Entity { return &LegalPoliceAdditionalOffenses{} },
	"legal.police.domesticviolence":                   func() model.Entity { return &LegalPoliceDomesticViolence{} },
	"legal.police.offenses":                           func() model.Entity { return &LegalPoliceOffenses{} },
	"legal.technology.manipulating":                   func() model.Entity { return &LegalTechnologyManipulating{} },
	"legal.technology.unauthorized":                   func() model.Entity { return &LegalTechnologyUnauthorized{} },
	"legal.technology.unlawful":                       func() model.Entity { return &LegalTechnologyUnlawful{} },
	"psychological.competence":                        func() model.Entity { return &PsychologicalCompetence{} },
	"psychological.consultations":                     func() model.Entity { return &PsychologicalConsultations{} },
	"psychological.diagnoses":                         func() model.Entity { return &PsychologicalDiagnoses{} },
	"psychological.conditions":                        func() model.Entity { return &PsychologicalExisting{} },
	"psychological.hospitalizations":                  func() model.Entity { return &PsychologicalHospitalizations{} },
	"psychological.treatment":                         func() model.Entity { return &PsychologicalTreatment{} },
}
