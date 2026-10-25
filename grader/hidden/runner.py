"""JSON natija beruvchi Django test runner: --testrunner hidden.runner.JsonRunner (BS_RESULT=yo'l)."""
import json
import os
import time
import unittest

from django.test.runner import DiscoverRunner

from .meta import info


def _short(tid):
    return tid[len('hidden.'):] if tid.startswith('hidden.') else tid


class _Result(unittest.TextTestResult):
    def startTestRun(self):
        super().startTestRun()
        self.rows = []
        self._t = {}

    def startTest(self, test):
        super().startTest(test)
        self._t[id(test)] = time.time()

    def _add(self, test, status, err=None, extra=''):
        ms = int((time.time() - self._t.get(id(test), time.time())) * 1000)
        row = {'id': _short(test.id()) + extra, 'status': status, 'ms': ms}
        row.update(info(test))
        if err is not None:
            row['trace'] = self._exc_info_to_string(err, test)[-1500:]
        self.rows.append(row)

    def addSuccess(self, test):
        super().addSuccess(test)
        self._add(test, 'pass')

    def addFailure(self, test, err):
        super().addFailure(test, err)
        self._add(test, 'fail', err)

    def addError(self, test, err):
        super().addError(test, err)
        self._add(test, 'error', err)

    def addSubTest(self, test, subtest, err):
        super().addSubTest(test, subtest, err)
        if err is not None:
            self._add(test, 'fail', err, extra=' [' + str(subtest._subDescription()) + ']')

    def addSkip(self, test, reason):
        super().addSkip(test, reason)
        self._add(test, 'skip')

    def stopTestRun(self):
        super().stopTestRun()
        path = os.environ.get('BS_RESULT')
        if path:
            with open(path, 'w', encoding='utf-8') as f:
                json.dump({'rows': self.rows}, f, ensure_ascii=False)


class JsonRunner(DiscoverRunner):
    def get_resultclass(self):
        return _Result
