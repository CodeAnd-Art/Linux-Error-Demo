// Crash Messages
const crashMessages = {
    tecno: [
        "TECNO SPARK 30 BOOT ERROR",
        "",
        "System initialization failed...",
        "Critical error detected in boot loader",
        "",
        "Error Code: 0xDEADBEEF",
        "Device: TECNO Spark 30",
        "OS: Android 11 Go Edition",
        "",
        "[FATAL] Kernel panic - not syncing",
        "[FATAL] VFS: Unable to mount root fs on unknown-block(0,0)",
        "",
        "Attempting recovery...",
        "Recovery failed!",
        "",
        "System will restart in 10 seconds...",
        "9...",
        "8...",
        "7...",
        "6...",
        "5...",
        "4...",
        "3...",
        "2...",
        "1...",
        "",
        "RESTARTING..."
    ],
    
    android: [
        "ANDROID SYSTEM ERROR",
        "",
        "Unfortunately, the process com.android.systemui has stopped.",
        "",
        "[ OK ] Boot completed",
        "[ OK ] System startup completed",
        "[ERROR] Process crash detected",
        "[ERROR] java.lang.RuntimeException:",
        "[ERROR] Unable to start activity ComponentInfo",
        "",
        "Stack trace:",
        "  at android.app.ActivityThread.performLaunchActivity",
        "  at android.app.ActivityThread.handleLaunchActivity",
        "  at android.app.ActivityThread.access$1100",
        "",
        "Force stopping package com.android.settings...",
        "Restarting SystemUI...",
        "",
        "DEVICE WILL RESTART",
        "REBOOTING IN 5 SECONDS..."
    ],
    
    ios: [
        "iOS CRITICAL ERROR",
        "",
        "An error has occurred. Try again later.",
        "",
        "Exception Type: KERN_INVALID_ADDRESS",
        "Exception Codes: 0x0000000000000001, 0x0000000000000000",
        "",
        "Triggered by Thread: 0",
        "",
        "Last Exception Backtrace:",
        "0   libobjc.A.dylib  0x00000001a69f0a90",
        "1   libobjc.A.dylib  0x00000001a69f0b20",
        "2   libsystem_kernel.dylib  0x00000001a66f0b20",
        "3   CoreFoundation  0x00000001a72f0b20",
        "",
        "Attempting automatic restart...",
        "",
        "Hold down the top and volume down buttons",
        "until the slider appears, then slide to power off.",
        "",
        "Device will restart in 8 seconds..."
    ],
    
    bsod: [
        "╔════════════════════════════════════════════════════════════╗",
        "║                    SYSTEM ERROR OCCURRED                   ║",
        "║                                                            ║",
        "║  If this is the first time you've seen this stop error    ║",
        "║  screen, restart your computer. If this screen appears    ║",
        "║  again, follow these steps:                               ║",
        "║                                                            ║",
        "║  Check for problems and disable BIOS memory cache.        ║",
        "║  Disable or remove newly installed hardware or software. ║",
        "║  Disable BIOS caching or shadowing.                       ║",
        "║  Run CHKDSK /F to check for hard drive corruption.        ║",
        "║                                                            ║",
        "║  Technical Information:                                    ║",
        "║  *** STOP: 0x0000007E (0xFFFFFFFFC0000005,                ║",
        "║             0xFFFFF880009A97D6, 0xFFFFF88000A01B68,        ║",
        "║             0xFFFFF88000A01960)                            ║",
        "║                                                            ║",
        "║  *** DRIVER_IRQL_NOT_LESS_OR_EQUAL                        ║",
        "║                                                            ║",
        "║  If you disable or remove hardware/software, this stop    ║",
        "║  error should not occur.                                   ║",
        "║                                                            ║",
        "║  If problems continue, disable or remove newly installed  ║",
        "║  hardware or software.                                     ║",
        "║                                                            ║",
        "║  Disable BIOS memory cache.                                ║",
        "║                                                            ║",
        "║  Beginning dump of physical memory                         ║",
        "║  Physical memory dump complete.                            ║",
        "║  Contact your system administrator or technical group.    ║",
        "╚════════════════════════════════════════════════════════════╝",
        "",
        "System will restart automatically in 15 seconds..."
    ],
    
    linux: [
        "[ 0.000000] Linux version 5.10.0-8-generic (root@kali)",
        "[ 0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz root=/dev/sda1",
        "[ 0.000000] KERNEL supported cpus:",
        "[ 0.000000] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'",
        "[ 0.000000] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'",
        "[  OK  ] Started User Manager for UID 0.",
        "[  OK  ] Reached target Sound Card.",
        "[  OK  ] Reached target Multi-User System.",
        "",
        "FATAL ERROR DETECTED",
        "=====================================",
        "[KERNEL PANIC] segfault at 0 ip 0x7ffff7a2 sp 0x7ffffffde2e0 error 6",
        "BUG: unable to handle page fault for address: 0xdeadbeef",
        "PF_FLAGS=0x10",
        "RIP: 0010:[<ffffffff810a5e3f>]",
        "RSP: 0018:ffff88007d41db40  EFLAGS: 00010206",
        "RAX: ffff880000000000 RBX: 0000000000000001 RCX: 0000000000000000",
        "RDX: 0000000000000001 RSI: 000000007fffffff RDI: 0000000000000000",
        "",
        "Kernel panic - not syncing: Attempted to kill init!",
        "CPU: 0 PID: 1 Comm: init Not tainted 5.10.0-8-generic",
        "Call Trace:",
        " dump_stack+0x6d/0x8b",
        " panic+0x101/0x2e3",
        " do_exit.cold+0x5f/0x65",
        " do_group_exit+0x35/0xc0",
        " get_signal+0x15b/0x850",
        " arch_do_signal_or_restart+0x3d/0x720",
        " exit_to_user_mode_prepare+0x124/0x130",
        "",
        "Kernel Offset: disabled",
        "CPU features:   CPUID",
        "---[ end Kernel panic ]---",
        "",
        "System halted."
    ]
};

// Start crash simulation
function startCrash(type) {
    const crashScreen = document.getElementById('crashScreen');
    const crashContent = document.getElementById('crashContent');
    
    crashScreen.classList.remove('hidden');
    crashContent.innerHTML = '';
    crashContent.className = '';
    
    if (type === 'all') {
        playAllCrashes();
    } else {
        playCrash(type, crashMessages[type]);
    }
}

// Play single crash
function playCrash(type, messages) {
    const crashContent = document.getElementById('crashContent');
    crashContent.className = type + '-crash';
    
    let index = 0;
    
    const typeDelay = {
        'tecno': 150,
        'android': 120,
        'ios': 100,
        'bsod': 80,
        'linux': 100
    };
    
    const interval = setInterval(() => {
        if (index < messages.length) {
            crashContent.innerHTML += messages[index] + '\n';
            crashContent.scrollTop = crashContent.scrollHeight;
            index++;
        } else {
            clearInterval(interval);
        }
    }, typeDelay[type] || 100);
}

// Play all crashes sequentially
function playAllCrashes() {
    const crashScreen = document.getElementById('crashScreen');
    const crashContent = document.getElementById('crashContent');
    
    const crashes = ['tecno', 'android', 'ios', 'bsod', 'linux'];
    let crashIndex = 0;
    
    function playNext() {
        if (crashIndex < crashes.length) {
            crashContent.innerHTML = '';
            crashContent.className = crashes[crashIndex] + '-crash';
            
            const messages = crashMessages[crashes[crashIndex]];
            let lineIndex = 0;
            
            const interval = setInterval(() => {
                if (lineIndex < messages.length) {
                    crashContent.innerHTML += messages[lineIndex] + '\n';
                    crashContent.scrollTop = crashContent.scrollHeight;
                    lineIndex++;
                } else {
                    clearInterval(interval);
                    
                    // Wait before next crash
                    setTimeout(() => {
                        crashIndex++;
                        playNext();
                    }, 3000);
                }
            }, 80);
        } else {
            // All crashes done
            setTimeout(() => {
                crashContent.innerHTML += '\n\n=== ALL SYSTEMS CRASHED ===\n';
                crashContent.innerHTML += 'Press X to exit\n';
            }, 1000);
        }
    }
    
    playNext();
}

// Close crash screen
function closeCrash() {
    const crashScreen = document.getElementById('crashScreen');
    crashScreen.classList.add('hidden');
}

// ESC tuşu ile kapat
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCrash();
    }
});

// Service Worker Register (for PWA)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {
        // SW registration optional
    });
}

// Prevent zooming
document.addEventListener('touchmove', (e) => {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, { passive: false });
