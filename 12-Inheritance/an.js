class Profile {

  constructor(userName, publicProfile, privateProfile) {

    this._hashVersion = Math.random().toString(36).substring(2, 15)
    // this._uid = 'ry6qbjkhsa9' // Temporary ['ry6qbjkhsa9' or undefined]
    this._uid = this._uid?this._uid:Math.random().toString(36).substring(2, 15)

    this._userName = userName

    this._publicProfile = {
      picture: publicProfile.picture,
      firstName: publicProfile.firstName,
      lastName: publicProfile.lastName,
      completeName: `${publicProfile.firstName} ${publicProfile.lastName}`,
      email: publicProfile.email,
    }

    this._privateProfile = {
      middleName: privateProfile.middleName,
      completeName: `${publicProfile.firstName} ${privateProfile.middleName} ${publicProfile.lastName}`,
      birthDate: privateProfile.birthDate,
      phoneNumer: privateProfile.phoneNumer,
      email: privateProfile.email,
      address: {
        country: privateProfile.addressCountry,
        state: privateProfile.addressState,
        city: privateProfile.addressCity,
        address: privateProfile.addressText,
        number: privateProfile.addressNumber,
        postalCode: privateProfile.addressPostalCode
      }
    }

  }

  getUid() {
    return this._uid
  }

  getUserName() {
    return this._userName
  }

  getPublicProfile() {
    return this._publicProfile
  }

  getPrivateProfile() {
    return this._privateProfile
  }

}

// ------------------------------

let userOne = new Profile('hawardhon', {
  picture: 'profile-picture-ry6qbjkhsa9.png',
  firstName: 'Hon',
  middleName: 'Natan',
  lastName:'Haward',
  email: 'howard@public.com',
},{
  middleName: 'Natan',
  birthDate: '10-18-1986',
  phoneNumer: '+55 11 98765-4321',
  email: 'natan@private.com',
  addressCountry: 'Brazil',
  addressState: 'São Paulo',
  addressCity: 'Santo André',
  addressText: 'Bairro São Jão, Rua das Mercês',
  addressNumber: '129',
  addressPostalCode: '11002-876',
})

console.log('Version:', userOne._hashVersion)
console.log('User ID:', userOne.getUid())
console.log('Username: ','@' + userOne.getUserName())
console.log('Profile [PUBLIC]:', userOne.getPublicProfile())
console.log('Profile [PRIVATE]:', userOne.getPrivateProfile())
