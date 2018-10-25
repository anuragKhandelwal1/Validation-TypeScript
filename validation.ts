import { Injectable } from '@angular/core';

@Injectable()

export class Validation {
    regExFname: RegExp = /^[a-zA-Z\s]+$/;
    regExLname: RegExp = /^[a-zA-Z]*$/;
    regExEmail: RegExp = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    regExZip: RegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    regExCity: RegExp = /^[a-zA-Z\s]+$/;
    regExState: RegExp = /^[a-zA-Z\s]+$/;

constructor() { }

    checkValidations(obj) {


        return (
            this.fName(obj.first_name) &&
            this.lName(obj.last_name) &&
            this.email(obj.email) &&
            this.phone(obj.phone) &&
            this.phone(obj.altphone) &&
            this.zip(obj.zip) &&
            this.city(obj.city) &&
            this.state(obj.state)
        )
    }


    fName(name: string) {
        if (name) {
            if (name.length < 100) {
                if (this.regExFname.test(name.trim())) {
                    return true;
                } else {
                    alert('Please Enter a Valid First Name');
                    return false;
                };
            } else {
                alert('First Name Too Long!');
                return false;
            }
        }
        else {
            alert('Please Enter Name');
            return false;
        }

    }

    lName(name: string) {
        if (name) {
            if (name.length < 100) {
                if (this.regExLname.test(name.trim())) {
                    return true;
                } else {
                    alert('Please Enter a Valid Last Name');
                    return false;
                };
            } else {
                alert(' Last Name Too Long!');
                return false;
            }
        } else {
            alert('Please Enter Name');
            return false;
        }
    }

    email(email: string) {
        if (email) {
            if (email.length < 150) {
                if (this.regExEmail.test(email.trim())) {
                    return true;
                } else {
                    alert('Please Enter a Valid Email');
                    return false;
                }
            } else {
                alert('Email Too Long!');
                return false;
            }
        } else {
            alert('Please Enter a Valid Email');
            return false;
        }
    }

    phone(phone: any) {
        if (phone == undefined || phone == '' || this.validatePhone(phone)) {
            return true;
        }
        else {
            alert('Please Enter a Valid Phone Number');
            return false;
        };
    }

    zip(zip) {                  //only 5 chars allowed
        if (zip && this.regExZip.test(String(zip).trim()) && String(zip).length == 5) {
            return true;
        } else {
            alert('Please Enter a Valid Zip');
            return false;
        };
    }

    city(city) {
        if (city && this.regExCity.test(city.trim())) {
            return true;
        } else {
            alert('Please Enter a Valid City');
            return false;
        };
    }

    state(state) {
        if (state && this.regExState.test(state.trim())) {
            return true;
        } else {
            alert('Please Enter a Valid State');
            return false;
        };
    }

    validatePhone(phone) {        //validates digit by digit
        if (phone.length != 14 || isNaN(parseInt(phone[1])) || isNaN(parseInt(phone[2])) || isNaN(parseInt(phone[3])) || isNaN(parseInt(phone[6])) || isNaN(parseInt(phone[7])) || isNaN(parseInt(phone[8])) || isNaN(parseInt(phone[10])) || isNaN(parseInt(phone[11])) || isNaN(parseInt(phone[12])) || isNaN(parseInt(phone[13]))) {
                     return false;
        } else {
            return true;
        }

    }

}
