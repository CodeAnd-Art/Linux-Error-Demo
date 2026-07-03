// Crash Screen Simulator
const crashScreen = document.getElementById('crashScreen');
const crashContent = document.getElementById('crashContent');
const menu = document.getElementById('menu');

function startCrash(type) {
    menu.style.display = 'none';
    crashScreen.classList.remove('hidden');
    crashContent.innerHTML = '';
    
    if (type === 'all') {
        playAllCrashes();
    } else if (type === 'tecno') {
        playTecnoCrash();
    } else if (type === 'android') {
        playAndroidCrash();
    } else if (type === 'ios') {
        playIOSCrash();
    } else if (type === 'bsod') {
        playBSOD();
    } else if (type === 'linux') {
        playLinuxPanic();
    }
}

function closeCrash() {
    crashScreen.classList.add('hidden');
    menu.style.display = 'flex';
    crashContent.innerHTML = '';
}

// Tecno Spark 30 Bootloop
async function playTecnoCrash() {
    crashContent.className = 'tecno-crash';
    
    for (let i = 0; i < 3; i++) {
        // Boot screen
        crashContent.innerHTML = `
__________________________________________________
                    TECNO
                Spark 30
__________________________________________________

              Powered by
              ANDROID
__________________________________________________
        `;
        await sleep(2000);
        
        // Bootloader
        crashContent.innerHTML = `
__________________________________________________
              TECNO Spark 30
__________________________________________________

[    0.000000] Linux version 5.4.0 (built-in)
[    0.123456] Initializing bootloader...
[    0.234567] Loading kernel...
[    0.567890] Starting Android system...

__________________________________________________
        `;
        await sleep(2000);
        
        // Loading bar
        crashContent.innerHTML = `
                Starting System...

        `;
        
        for (let p = 0; p <= 100; p += 5) {
            const bar = '='.repeat(p / 5) + ' '.repeat(20 - p / 5);
            crashContent.innerHTML = `
                Starting System...

        [${bar}] ${p}%
            `;
            await sleep(100);
        }
        
        await sleep(500);
        
        // Bootloop error
        crashContent.innerHTML = `
⚠ SYSTEM ERROR ⚠

    Boot Loop Detected!
  Sistem başlatılamıyor...
  System cannot boot...

__________________________________________________
[ERROR] Failed to mount /system
[ERROR] Kernel panic - not syncing
[ERROR] Rebooting device in 5 seconds...
__________________________________________________
        `;
        
        for (let cd = 5; cd > 0; cd--) {
            crashContent.innerHTML += `\n\nRebooting in ${cd}...`;
            await sleep(1000);
        }
    }
    
    await sleep(1000);
}

// Android Crash
async function playAndroidCrash() {
    crashContent.className = 'android-crash';
    
    crashContent.innerHTML = `
__________________________________________________

            Unfortunately,
       System UI has stopped

__________________________________________________
Process: com.android.systemui
Error: Signal 11 (SIGSEGV)

__________________________________________________

                    [OK]
__________________________________________________
    `;
    
    await sleep(4000);
}

// iOS Error
async function playIOSCrash() {
    crashContent.className = 'ios-crash';
    
    crashContent.innerHTML = `
__________________________________________________

            An error occurred.
    You'll need to restart your device.

__________________________________________________

              Recovery Mode

    Press and hold the top button and
         volume down button together.

              Error Code: 0xE8000015

__________________________________________________
    `;
    
    await sleep(5000);
}

// Windows BSOD
async function playBSOD() {
    crashContent.className = 'bsod-crash';
    crashContent.innerHTML = '';
    
    const bsodText = `
:::::::::::::::::::::::::::::::::::::::::::::::::::::
A PROBLEM HAS BEEN DETECTED AND WINDOWS HAS BEEN SHUT DOWN
TO PREVENT DAMAGE TO YOUR COMPUTER.

If this is the first time you've seen this stop error screen,
restart your computer. If this screen appears again, follow
these steps:

Check to make sure any new hardware or software is properly
installed. If this is a new installation, ask your hardware or
software manufacturer for any Windows updates you might need.

If problems continue, disable or remove any newly installed
hardware or software. Disable BIOS memory options such as caching
or shadowing.

Technical information:
*** DRIVER_IRQL_NOT_LESS_OR_EQUAL
*** Address FB8000 base at FB8000, DateStamp 4f7f1b89 - myfault.sys

Beginning dump of physical memory
Dumping physical memory to disk: `;
    
    crashContent.innerHTML = bsodText;
    
    for (let p = 0; p <= 100; p += 5) {
        crashContent.innerHTML = bsodText + `${p}%`;
        await sleep(150);
    }
    
    crashContent.innerHTML += `

Physical memory dump complete.
Contact your system administrator or technical support group for
further assistance.

:::::::::::::::::::::::::::::::::::::::::::::::::::::
    `;
    
    await sleep(2000);
}

// Linux Kernel Panic
async function playLinuxPanic() {
    crashContent.className = 'linux-crash';
    
    crashContent.innerHTML = `
==================================================
KERNEL PANIC - not syncing: Attempted to kill init!
==================================================

[    0.000000] Linux version 5.4.0-42-generic
[    0.123456] CPU: Intel(R) Core(TM) Processor
[    0.234567] Memory: 2048M available
[    1.567890] FATAL: No init found!
[    1.678901] CPU: 0 PID: 1 Comm: systemd
[    1.789012] Kernel panic - not syncing: VFS: Unable to mount root fs
[    1.890123] CPU: 0 PID: 1 Comm: init
[    2.000000] Call Trace:
[    2.111111]  dump_stack+0x6d/0x8b
[    2.222222]  panic+0xf3/0x2ec
[    2.333333]  die+0x30c/0x350
[    2.444444] Kernel Offset: 0x1000000 from 0xffffffff81000000
[    2.555555] HALTED

==================================================
    `;
    
    await sleep(7000);
}

// Play all crashes sequentially
async function playAllCrashes() {
    await playTecnoCrash();
    await sleep(1000);
    await playAndroidCrash();
    await sleep(1000);
    await playIOSCrash();
    await sleep(1000);
    await playBSOD();
    await sleep(1000);
    await playLinuxPanic();
    await sleep(2000);
    
    // Glitch effect
    crashContent.className = 'glitch-crash';
    const glitches = [
        "█▀█ ░░░ ███\n█▄█ ░░░ █░░",
        "╔═══════════╗\n║ ERROR ║\n╚═══════════╝",
        "█░░ ERR:" + Math.random().toString(16).substr(2, 6),
        "⚠ CRITICAL ERROR ⚠\n" + "█".repeat(40)
    ];
    
    crashContent.innerHTML = glitches[Math.floor(Math.random() * glitches.length)];
    await sleep(2000);
}

// Helper function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Close with X key
document.addEventListener('keydown', (e) => {
    if (e.key === 'x' || e.key === 'X') {
        if (!crashScreen.classList.contains('hidden')) {
            closeCrash();
        }
    }
});
