export const initOTPless = (callback: Function) => {
  const otplessInit = Reflect.get(window, 'otplessInit')

  const loadScript = () => {
    const isScriptLoaded = document.getElementById('otplessIdScript')
    if (isScriptLoaded) return

    const script = document.createElement('script')
    script.src = 'https://otpless.com/auth.js'
    script.id = 'otplessIdScript'
    script.setAttribute('cid', 'F1M09DL34NKKE9Z7SP68DI0ULZUFOS8O')
    document.body.appendChild(script)
  }

  console.log("Calling function:", otplessInit ? "otplessInit()" : "loadScript()");
  otplessInit ? otplessInit() : loadScript()

  Reflect.set(window, 'otpless', callback)
}