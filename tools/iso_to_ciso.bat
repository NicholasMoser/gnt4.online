:: I used to use wit, but the most common Worms 3D ciso was created with Nkit2, so use that instead.
:: I downloaded it from the Discord under #releases: https://discord.gg/sZJtvZPT3f
::
:: First param is the input ISO, second param is the output CISO
:: Requires https://wit.wiimm.de/
:: wit copy --ciso %1 %2
nkit -task convert -in %1 -convert ciso
