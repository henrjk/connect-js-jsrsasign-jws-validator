/* eslint-env es6 */
/* global KJUR, KEYUTIL */
import 'crypto-js/core'
import 'crypto-js/sha256'
import 'crypto-js/x64-core'
import 'jsrsasign/keyutil-1.0'
import 'jsrsasign/ext/base64'
import 'jsrsasign/ext/jsbn'
import 'jsrsasign/ext/jsbn2'
import 'jsrsasign/ext/rsa'
import 'jsrsasign/ext/rsa2'
import 'jsrsasign/ext/json-sans-eval'
import 'jsrsasign/rsasign-1.2'
import 'jsrsasign/base64x-1.1'
import 'jsrsasign/crypto-1.1'
import 'jsrsasign/jws-3.3'

import bows from 'bows'

const log = bows('jws-validator-jsrsasign')

/**
 * Validate tokens
 */
export function validateAndParseToken (jwk, token) {
  const p = Promise.resolve(undefined)
  if (!token) {
    return p
  } else {
    const jws = KJUR.jws.JWS
    log.debug('validateAndParseToken(): entering with token:', token)
    return p.then(() => {
      const keyObj = KEYUTIL.getKey(jwk)
      // const jws = new jsjws.KJUR.jws.JWS()
      if (!jws.verify(token, keyObj, ['RS256'])) {
        throw new Error(`invalid signature of token: ${token}`)
      }
    }).then(() => {
      log.debug('validateAndParseToken() token verified.')
      const p = jws.parse(token)
      return p.payloadObj
    })
  }
}
