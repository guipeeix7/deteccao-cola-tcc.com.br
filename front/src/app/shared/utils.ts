import { FormGroup } from "@angular/forms";

export function convertReactiveIntoformData (formData, formGroup) : FormData | null{
  Object.keys(formGroup.controls).forEach(key => {
    formData.append(key, formGroup.get(key).value ?? '')
  });
  return formData
}

export function convertInitData(resp, forms:FormGroup):Array<any>{
  Object.keys(forms.controls).forEach(key => {
    forms.controls[key].setValue(resp[key])
  });
  return []
}

export function isEmptyArray(object):boolean{
  return !(typeof(object) !== 'undefined' && object.length > 0)
}
