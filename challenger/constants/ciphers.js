module.exports = {
  0x00: 'TLS_NULL_WITH_NULL_NULL',
  0x01: 'TLS_RSA_WITH_NULL_MD5',
  0x02: 'TLS_RSA_WITH_NULL_SHA',
  0x03: 'TLS_RSA_EXPORT_WITH_RC4_40_MD5',
  0x04: 'TLS_RSA_WITH_RC4_128_MD5',
  0x05: 'TLS_RSA_WITH_RC4_128_SHA',
  0x06: 'TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5',
  0x07: 'TLS_RSA_WITH_IDEA_CBC_SHA',
  0x08: 'TLS_RSA_EXPORT_WITH_DES40_CBC_SHA',
  0x09: 'TLS_RSA_WITH_DES_CBC_SHA',
  0x0a: 'TLS_RSA_WITH_3DES_EDE_CBC_SHA',
  0x0b: 'TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA',
  0x0c: 'TLS_DH_DSS_WITH_DES_CBC_SHA',
  0x0d: 'TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA',
  0x0e: 'TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA',
  0x0f: 'TLS_DH_RSA_WITH_DES_CBC_SHA',
  0x10: 'TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA',
  0x11: 'TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA',
  0x12: 'TLS_DHE_DSS_WITH_DES_CBC_SHA',
  0x13: 'TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA',
  0x14: 'TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA',
  0x15: 'TLS_DHE_RSA_WITH_DES_CBC_SHA',
  0x16: 'TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA',
  0x17: 'TLS_DH_anon_EXPORT_WITH_RC4_40_MD5',
  0x18: 'TLS_DH_anon_WITH_RC4_128_MD5',
  0x19: 'TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA',
  0x1a: 'TLS_DH_anon_WITH_DES_CBC_SHA',
  0x1b: 'TLS_DH_anon_WITH_3DES_EDE_CBC_SHA',
  0x1c: 'SSL_FORTEZZA_KEA_WITH_NULL_SHA',
  0x1d: 'SSL_FORTEZZA_KEA_WITH_FORTEZZA_CBC_SHA',
  // https://github.com/openssl/openssl/issues/6710
  // 0x1e:     "SSL_FORTEZZA_KEA_WITH_RC4_128_SHA",
  0x1e: 'TLS_KRB5_WITH_DES_CBC_SHA',
  0x1f: 'TLS_KRB5_WITH_3DES_EDE_CBC_SHA',
  0x20: 'TLS_KRB5_WITH_RC4_128_SHA',
  0x21: 'TLS_KRB5_WITH_IDEA_CBC_SHA',
  0x22: 'TLS_KRB5_WITH_DES_CBC_MD5',
  0x23: 'TLS_KRB5_WITH_3DES_EDE_CBC_MD5',
  0x24: 'TLS_KRB5_WITH_RC4_128_MD5',
  0x25: 'TLS_KRB5_WITH_IDEA_CBC_MD5',
  0x26: 'TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA',
  0x27: 'TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA',
  0x28: 'TLS_KRB5_EXPORT_WITH_RC4_40_SHA',
  0x29: 'TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5',
  0x2a: 'TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5',
  0x2b: 'TLS_KRB5_EXPORT_WITH_RC4_40_MD5',
  0x2c: 'TLS_PSK_WITH_NULL_SHA',
  0x2d: 'TLS_DHE_PSK_WITH_NULL_SHA',
  0x2e: 'TLS_RSA_PSK_WITH_NULL_SHA',
  0x2f: 'TLS_RSA_WITH_AES_128_CBC_SHA',
  0x30: 'TLS_DH_DSS_WITH_AES_128_CBC_SHA',
  0x31: 'TLS_DH_RSA_WITH_AES_128_CBC_SHA',
  0x32: 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA',
  0x33: 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA',
  0x34: 'TLS_DH_anon_WITH_AES_128_CBC_SHA',
  0x35: 'TLS_RSA_WITH_AES_256_CBC_SHA',
  0x36: 'TLS_DH_DSS_WITH_AES_256_CBC_SHA',
  0x37: 'TLS_DH_RSA_WITH_AES_256_CBC_SHA',
  0x38: 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA',
  0x39: 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA',
  0x3a: 'TLS_DH_anon_WITH_AES_256_CBC_SHA',
  0x3b: 'TLS_RSA_WITH_NULL_SHA256',
  0x3c: 'TLS_RSA_WITH_AES_128_CBC_SHA256',
  0x3d: 'TLS_RSA_WITH_AES_256_CBC_SHA256',
  0x3e: 'TLS_DH_DSS_WITH_AES_128_CBC_SHA256',
  0x3f: 'TLS_DH_RSA_WITH_AES_128_CBC_SHA256',
  0x40: 'TLS_DHE_DSS_WITH_AES_128_CBC_SHA256',
  0x41: 'TLS_RSA_WITH_CAMELLIA_128_CBC_SHA',
  0x42: 'TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA',
  0x43: 'TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA',
  0x44: 'TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA',
  0x45: 'TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA',
  0x46: 'TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA',
  0x60: 'TLS_RSA_EXPORT1024_WITH_RC4_56_MD5',
  0x61: 'TLS_RSA_EXPORT1024_WITH_RC2_CBC_56_MD5',
  0x62: 'TLS_RSA_EXPORT1024_WITH_DES_CBC_SHA',
  0x63: 'TLS_DHE_DSS_EXPORT1024_WITH_DES_CBC_SHA',
  0x64: 'TLS_RSA_EXPORT1024_WITH_RC4_56_SHA',
  0x65: 'TLS_DHE_DSS_EXPORT1024_WITH_RC4_56_SHA',
  0x66: 'TLS_DHE_DSS_WITH_RC4_128_SHA',
  0x67: 'TLS_DHE_RSA_WITH_AES_128_CBC_SHA256',
  0x68: 'TLS_DH_DSS_WITH_AES_256_CBC_SHA256',
  0x69: 'TLS_DH_RSA_WITH_AES_256_CBC_SHA256',
  0x6a: 'TLS_DHE_DSS_WITH_AES_256_CBC_SHA256',
  0x6b: 'TLS_DHE_RSA_WITH_AES_256_CBC_SHA256',
  0x6c: 'TLS_DH_anon_WITH_AES_128_CBC_SHA256',
  0x6d: 'TLS_DH_anon_WITH_AES_256_CBC_SHA256',
  0x80: 'TLS_GOSTR341094_WITH_28147_CNT_IMIT',
  0x81: 'TLS_GOSTR341001_WITH_28147_CNT_IMIT',
  0x82: 'TLS_GOSTR341001_WITH_NULL_GOSTR3411',
  0x83: 'TLS_GOSTR341094_WITH_NULL_GOSTR3411',
  0x84: 'TLS_RSA_WITH_CAMELLIA_256_CBC_SHA',
  0x85: 'TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA',
  0x86: 'TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA',
  0x87: 'TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA',
  0x88: 'TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA',
  0x89: 'TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA',
  0x8a: 'TLS_PSK_WITH_RC4_128_SHA',
  0x8b: 'TLS_PSK_WITH_3DES_EDE_CBC_SHA',
  0x8c: 'TLS_PSK_WITH_AES_128_CBC_SHA',
  0x8d: 'TLS_PSK_WITH_AES_256_CBC_SHA',
  0x8e: 'TLS_DHE_PSK_WITH_RC4_128_SHA',
  0x8f: 'TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA',
  0x90: 'TLS_DHE_PSK_WITH_AES_128_CBC_SHA',
  0x91: 'TLS_DHE_PSK_WITH_AES_256_CBC_SHA',
  0x92: 'TLS_RSA_PSK_WITH_RC4_128_SHA',
  0x93: 'TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA',
  0x94: 'TLS_RSA_PSK_WITH_AES_128_CBC_SHA',
  0x95: 'TLS_RSA_PSK_WITH_AES_256_CBC_SHA',
  0x96: 'TLS_RSA_WITH_SEED_CBC_SHA',
  0x97: 'TLS_DH_DSS_WITH_SEED_CBC_SHA',
  0x98: 'TLS_DH_RSA_WITH_SEED_CBC_SHA',
  0x99: 'TLS_DHE_DSS_WITH_SEED_CBC_SHA',
  0x9a: 'TLS_DHE_RSA_WITH_SEED_CBC_SHA',
  0x9b: 'TLS_DH_anon_WITH_SEED_CBC_SHA',
  0x9c: 'TLS_RSA_WITH_AES_128_GCM_SHA256',
  0x9d: 'TLS_RSA_WITH_AES_256_GCM_SHA384',
  0x9e: 'TLS_DHE_RSA_WITH_AES_128_GCM_SHA256',
  0x9f: 'TLS_DHE_RSA_WITH_AES_256_GCM_SHA384',
  0xa0: 'TLS_DH_RSA_WITH_AES_128_GCM_SHA256',
  0xa1: 'TLS_DH_RSA_WITH_AES_256_GCM_SHA384',
  0xa2: 'TLS_DHE_DSS_WITH_AES_128_GCM_SHA256',
  0xa3: 'TLS_DHE_DSS_WITH_AES_256_GCM_SHA384',
  0xa4: 'TLS_DH_DSS_WITH_AES_128_GCM_SHA256',
  0xa5: 'TLS_DH_DSS_WITH_AES_256_GCM_SHA384',
  0xa6: 'TLS_DH_anon_WITH_AES_128_GCM_SHA256',
  0xa7: 'TLS_DH_anon_WITH_AES_256_GCM_SHA384',
  0xba: 'TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256',
  0xbb: 'TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256',
  0xbc: 'TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256',
  0xbd: 'TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256',
  0xbe: 'TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256',
  0xbf: 'TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256',
  0x00ff: 'TLS_EMPTY_RENEGOTIATION_INFO',
  0x5600: 'TLS_EMPTY_RENEGOTIATION_INFO_SCSV',
  0x1301: 'TLS_AES_128_GCM_SHA256',
  0x1302: 'TLS_AES_256_GCM_SHA384',
  0x1303: 'TLS_CHACHA20_POLY1305_SHA256',
  0x1304: 'TLS_AES_128_CCM_SHA256',
  0x1305: 'TLS_AES_128_CCM_8_SHA256',
  0xc001: 'TLS_ECDH_ECDSA_WITH_NULL_SHA',
  0xc002: 'TLS_ECDH_ECDSA_WITH_RC4_128_SHA',
  0xc003: 'TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA',
  0xc004: 'TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA',
  0xc005: 'TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA',
  0xc006: 'TLS_ECDHE_ECDSA_WITH_NULL_SHA',
  0xc007: 'TLS_ECDHE_ECDSA_WITH_RC4_128_SHA',
  0xc008: 'TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA',
  0xc009: 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA',
  0xc00a: 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA',
  0xc00b: 'TLS_ECDH_RSA_WITH_NULL_SHA',
  0xc00c: 'TLS_ECDH_RSA_WITH_RC4_128_SHA',
  0xc00d: 'TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA',
  0xc00e: 'TLS_ECDH_RSA_WITH_AES_128_CBC_SHA',
  0xc00f: 'TLS_ECDH_RSA_WITH_AES_256_CBC_SHA',
  0xc010: 'TLS_ECDHE_RSA_WITH_NULL_SHA',
  0xc011: 'TLS_ECDHE_RSA_WITH_RC4_128_SHA',
  0xc012: 'TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA',
  0xc013: 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA',
  0xc014: 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA',
  0xc015: 'TLS_ECDH_anon_WITH_NULL_SHA',
  0xc016: 'TLS_ECDH_anon_WITH_RC4_128_SHA',
  0xc017: 'TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA',
  0xc018: 'TLS_ECDH_anon_WITH_AES_128_CBC_SHA',
  0xc019: 'TLS_ECDH_anon_WITH_AES_256_CBC_SHA',
  0xc01a: 'TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA',
  0xc01b: 'TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA',
  0xc01c: 'TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA',
  0xc01d: 'TLS_SRP_SHA_WITH_AES_128_CBC_SHA',
  0xc01e: 'TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA',
  0xc01f: 'TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA',
  0xc020: 'TLS_SRP_SHA_WITH_AES_256_CBC_SHA',
  0xc021: 'TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA',
  0xc022: 'TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA',
  0xc023: 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256',
  0xc024: 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384',
  0xc025: 'TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256',
  0xc026: 'TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384',
  0xc027: 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256',
  0xc028: 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384',
  0xc029: 'TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256',
  0xc02a: 'TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384',
  0xc02b: 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256',
  0xc02c: 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384',
  0xc02d: 'TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256',
  0xc02e: 'TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384',
  0xc02f: 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256',
  0xc030: 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384',
  0xc031: 'TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256',
  0xc032: 'TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384',
  0xc033: 'TLS_ECDHE_PSK_WITH_RC4_128_SHA',
  0xc034: 'TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA',
  0xc035: 'TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA',
  0xc036: 'TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA',
  0xc037: 'TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256',
  0xc038: 'TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384',
  0xc039: 'TLS_ECDHE_PSK_WITH_NULL_SHA',
  0xc03a: 'TLS_ECDHE_PSK_WITH_NULL_SHA256',
  0xc03b: 'TLS_ECDHE_PSK_WITH_NULL_SHA384',
  0xc03c: 'TLS_RSA_WITH_ARIA_128_CBC_SHA256',
  0xc03d: 'TLS_RSA_WITH_ARIA_256_CBC_SHA384',
  0xc03e: 'TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256',
  0xc03f: 'TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384',
  0xc040: 'TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256',
  0xc041: 'TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384',
  0xc042: 'TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256',
  0xc043: 'TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384',
  0xc044: 'TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256',
  0xc045: 'TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384',
  0xc046: 'TLS_DH_anon_WITH_ARIA_128_CBC_SHA256',
  0xc047: 'TLS_DH_anon_WITH_ARIA_256_CBC_SHA384',
  0xc048: 'TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256',
  0xc049: 'TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384',
  0xc04a: 'TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256',
  0xc04b: 'TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384',
  0xc04c: 'TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256',
  0xc04d: 'TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384',
  0xc04e: 'TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256',
  0xc04f: 'TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384',
  0xc050: 'TLS_RSA_WITH_ARIA_128_GCM_SHA256',
  0xc051: 'TLS_RSA_WITH_ARIA_256_GCM_SHA384',
  0xc052: 'TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256',
  0xc053: 'TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384',
  0xc054: 'TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256',
  0xc055: 'TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384',
  0xc056: 'TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256',
  0xc057: 'TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384',
  0xc058: 'TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256',
  0xc059: 'TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384',
  0xc05a: 'TLS_DH_anon_WITH_ARIA_128_GCM_SHA256',
  0xc05b: 'TLS_DH_anon_WITH_ARIA_256_GCM_SHA384',
  0xc05c: 'TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256',
  0xc05d: 'TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384',
  0xc05e: 'TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256',
  0xc05f: 'TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384',
  0xc060: 'TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256',
  0xc061: 'TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384',
  0xc062: 'TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256',
  0xc063: 'TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384',
  0xc064: 'TLS_PSK_WITH_ARIA_128_CBC_SHA256',
  0xc065: 'TLS_PSK_WITH_ARIA_256_CBC_SHA384',
  0xc066: 'TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256',
  0xc067: 'TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384',
  0xc068: 'TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256',
  0xc069: 'TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384',
  0xc06a: 'TLS_PSK_WITH_ARIA_128_GCM_SHA256',
  0xc06b: 'TLS_PSK_WITH_ARIA_256_GCM_SHA384',
  0xc06c: 'TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256',
  0xc06d: 'TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384',
  0xc06e: 'TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256',
  0xc06f: 'TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384',
  0xc070: 'TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256',
  0xc071: 'TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384',
  0xc072: 'TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256',
  0xc073: 'TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384',
  0xc074: 'TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256',
  0xc075: 'TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384',
  0xc076: 'TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256',
  0xc077: 'TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384',
  0xc078: 'TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256',
  0xc079: 'TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384',
  0xc07a: 'TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256',
  0xc07b: 'TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384',
  0xc07c: 'TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256',
  0xc07d: 'TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384',
  0xc07e: 'TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256',
  0xc07f: 'TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384',
  0xc080: 'TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256',
  0xc081: 'TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384',
  0xc082: 'TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256',
  0xc083: 'TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384',
  0xc084: 'TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256',
  0xc085: 'TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384',
  0xc086: 'TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256',
  0xc087: 'TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384',
  0xc088: 'TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256',
  0xc089: 'TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384',
  0xc08a: 'TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256',
  0xc08b: 'TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384',
  0xc08c: 'TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256',
  0xc08d: 'TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384',
  0xc08e: 'TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256',
  0xc08f: 'TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384',
  0xc090: 'TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256',
  0xc091: 'TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384',
  0xc092: 'TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256',
  0xc093: 'TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384',
  0xc094: 'TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256',
  0xc095: 'TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384',
  0xc096: 'TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256',
  0xc097: 'TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384',
  0xc098: 'TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256',
  0xc099: 'TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384',
  0xc09a: 'TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256',
  0xc09b: 'TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384',
  0xc09c: 'TLS_RSA_WITH_AES_128_CCM',
  0xc09d: 'TLS_RSA_WITH_AES_256_CCM',
  0xc09e: 'TLS_DHE_RSA_WITH_AES_128_CCM',
  0xc09f: 'TLS_DHE_RSA_WITH_AES_256_CCM',
  0xc0a0: 'TLS_RSA_WITH_AES_128_CCM_8',
  0xc0a1: 'TLS_RSA_WITH_AES_256_CCM_8',
  0xc0a2: 'TLS_DHE_RSA_WITH_AES_128_CCM_8',
  0xc0a3: 'TLS_DHE_RSA_WITH_AES_256_CCM_8',
  0xc0a4: 'TLS_PSK_WITH_AES_128_CCM',
  0xc0a5: 'TLS_PSK_WITH_AES_256_CCM',
  0xc0a6: 'TLS_DHE_PSK_WITH_AES_128_CCM',
  0xc0a7: 'TLS_DHE_PSK_WITH_AES_256_CCM',
  0xc0a8: 'TLS_PSK_WITH_AES_128_CCM_8',
  0xc0a9: 'TLS_PSK_WITH_AES_256_CCM_8',
  0xc0aa: 'TLS_PSK_DHE_WITH_AES_128_CCM_8',
  0xc0ab: 'TLS_PSK_DHE_WITH_AES_256_CCM_8',
  0xc0ac: 'TLS_ECDHE_ECDSA_WITH_AES_128_CCM',
  0xc0ad: 'TLS_ECDHE_ECDSA_WITH_AES_256_CCM',
  0xc0ae: 'TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8',
  0xc0af: 'TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8',
  0xcc13: 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256_OLD',
  0xcc14: 'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256_OLD',
  0xcc15: 'TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256_OLD',
  0xcca8: 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256',
  0xcca9: 'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256',
  0xccaa: 'TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256',
  0xccab: 'TLS_PSK_WITH_CHACHA20_POLY1305_SHA256',
  0xccac: 'TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256',
  0xccad: 'TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256',
  0xccae: 'TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256',
  0xff00: 'TLS_GOSTR341094_RSA_WITH_28147_CNT_MD5',
  0xff01: 'TLS_RSA_WITH_28147_CNT_GOST94',
  0xff02: '256',
  0xff03: '256',
  0xfefe: 'SSL_RSA_FIPS_WITH_DES_CBC_SHA',
  0xfeff: 'SSL_RSA_FIPS_WITH_3DES_EDE_CBC_SHA',
  0xfee0: 'SSL_RSA_FIPS_WITH_3DES_EDE_CBC_SHA',
  0xfee1: 'SSL_RSA_FIPS_WITH_DES_CBC_SHA',
  // 0x010080: "SSL_CK_RC4_128_WITH_MD5",
  // 0x020080: "SSL_CK_RC4_128_EXPORT40_WITH_MD5",
  // 0x030080: "SSL_CK_RC2_128_CBC_WITH_MD5",
  // 0x040080: "SSL_CK_RC2_128_CBC_EXPORT40_WITH_MD5",
  // 0x050080: "SSL_CK_IDEA_128_CBC_WITH_MD5",
  // 0x060040: "SSL_CK_DES_64_CBC_WITH_MD5",
  // 0x060140: "SSL_CK_DES_64_CBC_WITH_SHA",
  // 0x0700c0: "SSL_CK_DES_192_EDE3_CBC_WITH_MD5",
  // 0x0701c0: "SSL_CK_DES_192_EDE3_CBC_WITH_SHA",
  // 0x080080: "SSL_CK_RC4_64_WITH_MD5",
  // 0xff0800: "SSL_CK_DES_64_CFB64_WITH_MD5_1",
  // 0xff0810: "SSL_CK_NULL",
};
