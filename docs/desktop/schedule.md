---
sidebar_position: 2
---

# Task Scheduler Setup — SR BRIDGE (EXE with Arguments)

## 1) Create the Task in Windows Task Scheduler

1. Open **Task Scheduler**
   - Start → type **"Task Scheduler"** → Press **Enter**

2. Click **Create Task…** (right-hand Actions pane)

---

## 2) General Tab

- **Name:** SpaceRivers BRIDGE
- **Security options:**
  - Run whether user is logged on or not
  - Run with highest privileges

---

## 3) Triggers Tab

1. Click **New…**
2. **Begin the task:** On a schedule
3. Set:
   - **Daily**
   - Start time
   - Recurrence
4. Click **OK**

---

## 4) Actions Tab

1. Click **New…**
2. **Program/script:** `<exe file path>`
3. **Add arguments:**
   - **Single Job:**

     ```bash
     --Task Job
     ```

   - **Multiple Jobs:**

     ```bash
     --Task Job Phase Cost-Code Actual-Cost
     ```

   - **All Jobs:**
     ```bash
     --all
     ```

4. Click **OK**

---

## 5) Conditions Tab

- Uncheck **Start the task only if the computer is on AC power**
- Uncheck **Start only if network connection available** (unless required)

---

## 6) Settings Tab

- Tick **Allow task to be run on demand**
- Optional:
  - Stop the task if it runs longer than **X hours**
  - Restart task every **1 minute**, up to **3 times**

Click **OK**

---

## 7) Testing & Verification

1. Run the task manually in **Task Scheduler**
2. Check **Last Run Result**
   - `0x0` → Success ✅
3. Check **logs folder** (exe file path) for output
4. Verify **config.json** updated correctly
5. Ensure **UI refresh timer** picks up changes

---

### Result

This setup schedules the **SR BRIDGE** with specific job arguments, logs output, and updates `config.json` automatically.
