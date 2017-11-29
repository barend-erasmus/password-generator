Outfile "Password Generator.exe"

InstallDir "$PROGRAMFILES\Password Generator"

Section
 
SetOutPath $INSTDIR

File /r "D:\Git\barend-erasmus\password-generator\electron-app\Password Generator-win32-x64\*.*"

CreateShortCut "$SMPROGRAMS\Password Generator.lnk" "$INSTDIR\Password Generator.exe"

WriteUninstaller "$INSTDIR\uninstall.exe"

CreateShortCut "$SMPROGRAMS\Uninstall Password Generator.lnk" "$INSTDIR\uninstall.exe"
 
SectionEnd

Section "Uninstall"
 
Delete "$INSTDIR\uninstall.exe"

Delete "$SMPROGRAMS\uninstall-password-generator.lnk"
 
RMDir /r $INSTDIR
 
SectionEnd