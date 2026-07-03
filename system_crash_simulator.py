#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
System Crash Simulator - Gerçekçi Bootloop & Hata Ekranları
Tecno Spark 30 + Android + iOS + BSOD + Linux Kernel Panic
Press X to exit safely
"""

import os
import sys
import time
import random
from typing import Optional

# Terminal temizleme
def clear():
    os.system('clear' if os.name == 'posix' else 'cls')

# Renkler (ANSI codes)
class Colors:
    BLACK = '\033[30m'
    RED = '\033[31m'
    GREEN = '\033[32m'
    YELLOW = '\033[33m'
    BLUE = '\033[34m'
    MAGENTA = '\033[35m'
    CYAN = '\033[36m'
    WHITE = '\033[37m'
    RESET = '\033[0m'
    BOLD = '\033[1m'
    DIM = '\033[2m'

def exit_prompt():
    """Exit talimatı"""
    print(f"\n{Colors.YELLOW}[Press 'X' or Ctrl+C to exit]{Colors.RESET}")
    print(f"{Colors.YELLOW}[Çıkmak için 'X' basın]{Colors.RESET}\n")

def tecno_bootloop():
    """Tecno Spark 30 Bootloop Simülasyonu"""
    clear()
    exit_prompt()
    
    # Boot ekranı
    for _ in range(3):
        clear()
        print("\n" * 8)
        print(f"{Colors.WHITE}{Colors.BOLD}")
        print("_" * 50)
        print(f"{'TECNO':^50}")
        print(f"{'Spark 30':^50}")
        print("_" * 50)
        print(f"\n{'Powered by':^50}")
        print(f"{'ANDROID':^50}")
        print("\n" + "_" * 50)
        print(f"{Colors.RESET}")
        time.sleep(2)
        
        # Bootloader başlıyor
        clear()
        print(f"{Colors.WHITE}{Colors.BOLD}")
        print("\n" * 6)
        print("_" * 50)
        print(f"{'TECNO Spark 30':^50}")
        print("_" * 50)
        print(f"\n{Colors.CYAN}[    0.000000] Linux version 5.4.0 (built-in){Colors.RESET}")
        print(f"{Colors.CYAN}[    0.123456] Initializing bootloader...{Colors.RESET}")
        print(f"{Colors.CYAN}[    0.234567] Loading kernel...{Colors.RESET}")
        print(f"{Colors.CYAN}[    0.567890] Starting Android system...{Colors.RESET}")
        print("\n" + "_" * 50)
        
        time.sleep(2)
        
        # Loading bar animasyonu
        clear()
        print(f"{Colors.WHITE}{Colors.BOLD}")
        print("\n" * 8)
        print(f"{'Starting System...':^50}")
        print()
        
        for i in range(1, 101, 5):
            bar = f"[{'=' * (i // 5)}{' ' * (20 - i // 5)}]"
            print(f"\r{bar} {i}%", end='', flush=True)
            time.sleep(0.1)
        
        print("\n")
        time.sleep(1)
        
        # BOOTLOOP - Sistem sıfırlanıyor
        clear()
        print(f"{Colors.RED}{Colors.BOLD}")
        print("\n" * 5)
        print(f"{'⚠ SYSTEM ERROR ⚠':^50}")
        print()
        print(f"{'Boot Loop Detected!':^50}")
        print(f"{'Sistem başlatılamıyor...':^50}")
        print(f"{'System cannot boot...':^50}")
        print("\n" + "_" * 50)
        print(f"{Colors.YELLOW}[ERROR] Failed to mount /system{Colors.RESET}")
        print(f"{Colors.YELLOW}[ERROR] Kernel panic - not syncing{Colors.RESET}")
        print(f"{Colors.YELLOW}[ERROR] Rebooting device in 5 seconds...{Colors.RESET}")
        print("_" * 50)
        print(f"{Colors.RESET}")
        
        # Countdown
        for countdown in range(5, 0, -1):
            print(f"\r{Colors.RED}Rebooting in {countdown}...{Colors.RESET}", end='', flush=True)
            time.sleep(1)
        
        print("\n")
        time.sleep(1)

def android_crash():
    """Android System Crash"""
    clear()
    exit_prompt()
    
    clear()
    print(f"{Colors.BLUE}{Colors.BOLD}")
    print("\n" * 10)
    print(f"{'Unfortunately,':^50}")
    print(f"{'System UI has stopped':^50}")
    print("\n" + "_" * 50)
    print(f"{Colors.WHITE}Process: com.android.systemui{Colors.RESET}")
    print(f"{Colors.YELLOW}Error: Signal 11 (SIGSEGV){Colors.RESET}")
    print("_" * 50)
    print(f"\n{'[OK]':^50}")
    print(f"{Colors.RESET}")
    
    time.sleep(4)

def ios_crash():
    """iOS Crash Screen"""
    clear()
    exit_prompt()
    
    clear()
    print(f"{Colors.BLACK}{Colors.BOLD}")
    print("\n" * 8)
    print(f"{'▓' * 50}")
    print(f"{'An error occurred.':^50}")
    print(f"{'You'll need to restart your device.':^50}")
    print(f"{'▓' * 50}")
    print(f"\n{'Recovery Mode':^50}")
    print(f"{'Press and hold the top button and':^50}")
    print(f"{'volume down button together.':^50}")
    print(f"\n{'Error Code: 0xE8000015':^50}")
    print(f"{Colors.RESET}")
    
    time.sleep(5)

def bsod_crash():
    """Blue Screen of Death (Windows-style)"""
    clear()
    exit_prompt()
    
    clear()
    print(f"{Colors.BLUE}{Colors.BOLD}")
    print("\n" * 3)
    print(":" * 50)
    print("A PROBLEM HAS BEEN DETECTED AND windows HAS BEEN SHUT DOWN")
    print("TO PREVENT DAMAGE TO YOUR COMPUTER.")
    print(":")
    print(": If this is the first time you've seen this stop error screen,")
    print(": restart your computer. If this screen appears again, follow")
    print(": these steps:")
    print(":")
    print(": Check to make sure any new hardware or software is properly")
    print(": installed. If this is a new installation, ask your hardware or")
    print(": software manufacturer for any Windows updates you might need.")
    print(":")
    print(": If problems continue, disable or remove any newly installed")
    print(": hardware or software. Disable BIOS memory options such as caching")
    print(": or shadowing. If you need to use Safe Mode to remove or disable")
    print(": components, restart your computer, press F8 to select Advanced")
    print(": startup options, and then select Safe Mode.")
    print(":")
    print(": Technical information:")
    print(": *** DRIVER_IRQL_NOT_LESS_OR_EQUAL")
    print(": *** Address FB8000 base at FB8000, DateStamp 4f7f1b89 - myfault.sys")
    print(":")
    print(": Beginning dump of physical memory")
    print(": Dumping physical memory to disk:")
    
    for i in range(0, 101, 5):
        print(f"\r:     {i}%", end='', flush=True)
        time.sleep(0.15)
    
    print()
    print(": Physical memory dump complete.")
    print(": Contact your system administrator or technical support group for")
    print(": further assistance.")
    print(":")
    print(":" * 50)
    print(f"{Colors.RESET}")
    
    time.sleep(6)

def linux_kernel_panic():
    """Linux Kernel Panic"""
    clear()
    exit_prompt()
    
    clear()
    print(f"{Colors.RED}{Colors.BOLD}")
    print("\n")
    print("=" * 50)
    print("KERNEL PANIC - not syncing: Attempted to kill init!")
    print("=" * 50)
    print(f"{Colors.YELLOW}")
    print("[    0.000000] Linux version 5.4.0-42-generic")
    print("[    0.123456] CPU: Intel(R) Core(TM) Processor")
    print("[    0.234567] Memory: 2048M available")
    print("[    1.567890] FATAL: No init found!")
    print("[    1.678901] CPU: 0 PID: 1 Comm: systemd")
    print("[    1.789012] Kernel panic - not syncing: VFS: Unable to mount root fs")
    print("[    1.890123] CPU: 0 PID: 1 Comm: init")
    print("[    2.000000] Call Trace:")
    print("[    2.111111]  dump_stack+0x6d/0x8b")
    print("[    2.222222]  panic+0xf3/0x2ec")
    print("[    2.333333]  die+0x30c/0x350")
    print("[    2.444444] Kernel Offset: 0x1000000 from 0xffffffff81000000")
    print("[    2.555555] HALTED")
    print("=" * 50)
    print(f"{Colors.RESET}")
    
    time.sleep(7)

def glitch_effect():
    """Rastgele glitch efekti"""
    clear()
    glitches = [
        "█▀█ ░░░ ███\n█▄█ ░░░ █░░",
        "╔═══════════╗\n║ SY$TEM ║\n╚═══════════╝",
        "█░░ ERR:0x%X" % random.randint(0, 0xFFFFFF),
        "⚠ CRITICAL ERROR ⚠\n%s" % "█" * 40
    ]
    
    print(f"{Colors.RED}{Colors.BOLD}")
    print("\n" * 8)
    print(random.choice(glitches))
    print(f"{Colors.RESET}")
    
    time.sleep(2)

def main():
    """Ana program - Tüm çöküşleri sırasıyla göster"""
    
    sequence = [
        ("Tecno Spark 30 - Bootloop", tecno_bootloop),
        ("Android System Crash", android_crash),
        ("iOS System Error", ios_crash),
        ("Windows BSOD", bsod_crash),
        ("Linux Kernel Panic", linux_kernel_panic),
        ("Glitch Effect", glitch_effect),
    ]
    
    print(f"\n{Colors.BOLD}=== SYSTEM CRASH SIMULATOR ==={Colors.RESET}")
    print("Tüm sistemler sırasıyla çöküş gösterecek...\n")
    
    try:
        for name, func in sequence:
            print(f"{Colors.CYAN}[{name}]{Colors.RESET}")
            func()
            time.sleep(2)
        
        # Loop tekrarla
        print(f"\n{Colors.GREEN}Başa dönüyor...{Colors.RESET}\n")
        time.sleep(2)
        main()
        
    except KeyboardInterrupt:
        clear()
        print(f"\n{Colors.GREEN}{Colors.BOLD}Çıkış yapılıyor... Güvenli kapatma!{Colors.RESET}\n")
        sys.exit(0)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        clear()
        print(f"\n{Colors.GREEN}✓ Program sonlandırıldı.{Colors.RESET}\n")
        sys.exit(0)
