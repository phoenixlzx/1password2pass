1password2pass
==============

1password2pass is a tool to import passwords from 1password keychain to pass (passwordstore.org)

### Instruction

1. `npm install -g 1password2pass`
2. Export your 1password data to `.1pif`
3. `1password2pass /path/to/export.1pif/data.1pif`

Currently only passwords and login credentials will be imported.

### Why

AgileBits seems refusing to develop a Linux version of 1Password with 'reasons', so I decided to switch to `pass`.

However the [1password2pass.rb](http://git.zx2c4.com/password-store/tree/contrib/importers/1password2pass.rb) yield error on my Mac. I have to wrote one for myself.

### License

MIT.
