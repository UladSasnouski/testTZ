import { makeObservable, observable, action } from 'mobx';

export function store() {

    return makeObservable({
        first: '',
        last: '',
        modal: false,
        firstChek: false,
        lastChek: false,
        setFirstName(e: React.ChangeEvent<HTMLInputElement>) {
            this.first = e.target.value;
            this.firstChek = false;
            console.log(this.first)
        },
        setLastName(e: React.ChangeEvent<HTMLInputElement>) {
            this.last = e.target.value;
            this.lastChek = false;
            console.log(this.last)
        },
        submit() {
            if (this.first.length > 0 && this.last.length > 0) {
                this.modal = true;
                console.log(this.modal)
            } else {
                if (this.first.length < 1) {
                    this.firstChek = true;
                }
                if (this.last.length < 1) {
                    this.lastChek = true;
                }
            }
        },
        close() {
            this.modal = false;
            console.log(this.modal)
        }
    }, {
        first: observable,
        last: observable,
        modal: observable,
        firstChek: observable,
        lastChek: observable,
        setFirstName: action.bound,
        setLastName: action.bound,
        submit: action,
        close: action,
    });
}