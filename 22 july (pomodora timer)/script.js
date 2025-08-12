
let timerInterval;
    let isRunning = false;
    let timeLeft = 0;
    let currentSession = 'work';
    let completedPomodoros = 0;

    function getValues() {
      return {
        work: parseInt(document.getElementById('work').value) * 60,
        shortBreak: parseInt(document.getElementById('shortBreak').value) * 60,
        longBreak: parseInt(document.getElementById('longBreak').value) * 60,
        cycles: parseInt(document.getElementById('cycles').value)
      };
    }

    function updateTimerDisplay() {
      const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const sec = String(timeLeft % 60).padStart(2, '0');
      document.getElementById('timer').textContent = `${min}:${sec}`;
    }

    function updateSessionLabel() {
      let label = 'Session: ';
      if (currentSession === 'work') label += 'Work';
      else if (currentSession === 'shortBreak') label += 'Short Break';
      else label += 'Long Break';
      document.getElementById('sessionLabel').textContent = label;
    }

    function updateIndicators() {
      const { cycles } = getValues();
      let dots = '';
      for (let i = 0; i < cycles; i++) {
        dots += i < completedPomodoros ? '🔴 ' : '⚪ ';
      }
      document.getElementById('indicator').textContent = dots.trim();
    }

    function start() {
      if (isRunning) return;
      isRunning = true;
      if (timeLeft === 0) setSession(currentSession);

      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          isRunning = false;
          nextSession();
        }
      }, 1000);
    }

    function pause() {
      clearInterval(timerInterval);
      isRunning = false;
    }

    function reset() {
      pause();
      completedPomodoros = 0;
      currentSession = 'work';
      setSession('work');
      updateIndicators();
    }

    function setSession(session) {
      const values = getValues();
      currentSession = session;
      if (session === 'work') timeLeft = values.work;
      if (session === 'shortBreak') timeLeft = values.shortBreak;
      if (session === 'longBreak') timeLeft = values.longBreak;
      updateSessionLabel();
      updateTimerDisplay();
    }

    function nextSession() {
      const values = getValues();

      if (currentSession === 'work') {
        completedPomodoros++;
        if (completedPomodoros % values.cycles === 0) {
          setSession('longBreak');
        } else {
          setSession('shortBreak');
        }
      } else {
        setSession('work');
      }

      updateIndicators();
      start(); // auto start next session
    }

    // Initialize
    setSession('work');
    updateIndicators();
