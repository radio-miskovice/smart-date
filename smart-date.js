'use strict';

class SmartDate extends Date {
    constructor(...params) {
        super( ...params );
    }

    static today() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth(), date.getDate() );
    }
    static tomorrow() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth(), date.getDate()+1 );
    }
    static yesterday() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth(), date.getDate()-1 );
    }
    static thisMonth() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth() );
    }
    static nextMonth() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth()+1 );
    }

    truncate( precision = 'DD' ) {
        let [ YYYY, MM, DD, hh, mm, ss ] = [ this.getFullYear(), this.getMonth(), this.getDate(), 
                this.getHours(), this.getMinutes(), this.getSeconds() ] ;
        switch( precision ) {
            case 'year'  : ;
            case 'YYYY'  : date.MM = 0 ;
            case 'month' :
            case 'MM'    : date.DD = 1 ;
            case 'day'   :
            case 'DD'    : date.hh = 0 ;
            case 'hour'  :
            case 'hh'    : date.mm = 0 ;
            case 'minute' : 
            case 'mm'    : date.ss = 0 ;
                return new SmartDate( YYYY, MM, DD, hh, mm, ss );
                break ;
            default: throw new Error (`Invalid precision code in SmartDate.truncate( precision ). Precision code = "${precision}"`) ;
        }
    }

    firstDay() {
        let result = new SmartDate( this.getFullYear(), this.getMonth(), 1 );
        return result ;
    }
    lastDay() {

    }    
}

module.exports = SmartDate ;