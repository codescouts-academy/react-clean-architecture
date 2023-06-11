import { useResolve } from "@codescouts/di";
import { useCallback, useRef } from "react";

import { AddLogUserCase } from "@/application/add-log-use-case";
import { useLogger } from "@/infrastructure/services";

export const useLogViewModel = () => {
    const input = useRef<HTMLInputElement>(null);
    const { logs } = useLogger();
    const testUseCase = useResolve(AddLogUserCase);

    const test = useCallback(() => {
        if (!input.current?.value) return;

        testUseCase.execute(input.current?.value);

        input.current.value = "";
        input.current.focus();
    }, [testUseCase]);

    return { logs, test, input };
};